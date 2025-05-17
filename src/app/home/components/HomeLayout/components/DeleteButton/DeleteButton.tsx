"use client";
import { Button } from "@/components/ui/button";
import useComponent from "./useComponent";
import { TShape } from "@/lib/trpc/types";

export function DeleteButton({ shape }: { shape: TShape }) {
  const { handleDelete } = useComponent({ shape });

  return (
    <Button variant="outline" onClick={handleDelete}>
      Eliminar
    </Button>
  );
}
