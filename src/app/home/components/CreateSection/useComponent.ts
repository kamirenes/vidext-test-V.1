"use client";

import { isHexColor } from "@/lib/functions";
import { trpc } from "@/lib/trpc/client";
import { useMemo, useState } from "react";
import { toast } from "sonner";

const useComponent = () => {
  const refreshList = trpc.useUtils();
  const createShape = trpc.shape.create.useMutation({
    onSuccess: () => {
      refreshList.shape.getAll.invalidate();
      toast.success("Saved");
      setColor("");
      setType("");
      setSize(0);
    },
    onError: (error) => {
      toast.error("Error creating a new shape", {
        description: error.message,
      });
    },
  });

  const suggestColor = trpc.ai.suggestColor.useMutation();

  const [type, setType] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createShape.mutate({ type, color, size });
  };

  const handleSuggestColor = async () => {
    await suggestColor.mutate(undefined, {
      onSuccess: (data) => {
        console.info("test data", data);
        setColor(data?.color ?? "#fc0398");
      },
    });
  };

  const handleColorChange = (value: string) => {
    setColor(value);
    if (value && !isHexColor(value)) {
      toast.warning("The color format is not correct. use an hex like: #ff0000");
    }
  };

  const isSaveDisable = useMemo(() => {
    if (isHexColor(color) && size > 0 && type !== '' ) return false
    return true
  }, [color, size, type])

  return {
    color,
    createShape,
    isSaveDisable,
    type,
    suggestColor,
    handleColorChange,
    handleSubmit,
    handleSuggestColor,
    isHexColor,
    setColor,
    setSize,
    setType,
  };
};

export default useComponent;
