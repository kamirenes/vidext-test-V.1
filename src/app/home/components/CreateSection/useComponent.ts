"use client";

import { trpc } from "@/lib/trpc/client";
import { useState } from "react";
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

  return {
    color,
    createShape,
    type,
    size,
    suggestColor,
    handleSubmit,
    handleSuggestColor,
    setColor,
    setSize,
    setType,
  };
};

export default useComponent;
