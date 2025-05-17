"use client";

import { trpc } from "@/lib/trpc/client";
import { useState } from "react";
import { TShape } from "@/lib/trpc/types";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";

const useComponent = ({ shape }: { shape: TShape }) => {
  const [type, setType] = useState(shape.type);
  const [color, setColor] = useState(shape.color);
  const [size, setSize] = useState(shape.size);

  const refreshList = trpc.useUtils();
  const updateShape = trpc.shape.update.useMutation({
    onSuccess: () => {
      refreshList.shape.getAll.invalidate();
      toast.success("Updated");
    },
    onError: (error) => {
      toast.error("Error updating the shape", {
        description: error.message,
      });
    },
  });

  const router = useRouter();
  const searchParams = useSearchParams();
  const isOpen = searchParams.get("edit") === shape.id;

  const openDrawer = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("edit", shape.id);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const closeDrawer = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("edit");
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const handleUpdate = () => {
    updateShape.mutate({ id: shape.id, type, color, size });
    closeDrawer();
  };

  return {
    color,
    isOpen,
    loading: updateShape.isLoading,
    type,
    size,
    closeDrawer,
    handleUpdate,
    openDrawer,
    setColor,
    setSize,
    setType,
  };
};

export default useComponent;
