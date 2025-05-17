"use client";

import { trpc } from "@/lib/trpc/client";
import { TShape } from "@/lib/trpc/types";
import { EditShapeDrawer } from "../EditShapeDrawer/EditShapeDrawe";
import { DeleteButton } from "../DeleteButton/DeleteButton";

export default function ShapeList() {
  const { data, isLoading, error } = trpc.shape.getAll.useQuery();

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="mt-12">
      <label htmlFor="type" className="text-xl font-medium text-foreground">
        List of shapes
      </label>
      <ul className="mt-4">
      {data?.map((shape: TShape) => (
        <div key={shape.id} className="flex justify-between items-center mt-2">
          <span>
            {shape.type} - {shape.color} - {shape.size}
          </span>
          <div className="flex justify-end gap-2">
            <EditShapeDrawer shape={shape} />
            <DeleteButton shape={shape} />
          </div>
        </div>
      ))}
    </ul>
    </div>
    
  );
}
