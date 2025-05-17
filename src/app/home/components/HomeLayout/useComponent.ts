"use client";

import { trpc } from "@/lib/trpc/client";
import { useState } from "react";

const useComponent = () => {
  const refreshList = trpc.useUtils();
  const createShape = trpc.shape.create.useMutation({
    onSuccess: () => {
      refreshList.shape.getAll.invalidate();
    },
  });

  const [type, setType] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createShape.mutate({ type, color, size });
  };

  return {
    color,
    createShape,
    type,
    size,
    handleSubmit,
    setColor,
    setSize,
    setType,
  };
};

export default useComponent;
