'use client'

import { trpc } from "@/lib/trpc/client";
import { TShape } from "@/lib/trpc/types";
import { toast } from "sonner";

const useComponent = ({ shape }: { shape: TShape }) => {

  const refreshList = trpc.useUtils();
  const deleteShape = trpc.shape.delete.useMutation({
    onSuccess: () => {
      refreshList.shape.getAll.invalidate();
      toast.success("Deleted");
    },
    onError: (error) => {
      toast.error("Error deleting the shape", {
        description: error.message,
      });
    },
  });

  const handleDelete = () => {
    deleteShape.mutate(shape.id)
  }

  return {
    handleDelete
  }
}

export default useComponent;