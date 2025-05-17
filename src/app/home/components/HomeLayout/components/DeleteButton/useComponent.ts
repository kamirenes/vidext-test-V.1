'use client'

import { trpc } from "@/lib/trpc/client";
import { TShape } from "@/lib/trpc/types";

const useComponent = ({ shape }: { shape: TShape }) => {

  const refreshList = trpc.useUtils();
  const deleteShape = trpc.shape.delete.useMutation({
    onSuccess: () => {
      refreshList.shape.getAll.invalidate();
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