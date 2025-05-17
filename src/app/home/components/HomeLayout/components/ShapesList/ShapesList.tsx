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
    <ul>
      {data?.map((shape: TShape) => (
        <div key={shape.id} className="flex justify-between items-center">
          <span>
            {shape.type} - {shape.color} - {shape.size}
          </span>
          <EditShapeDrawer shape={shape} />
          <DeleteButton shape={shape} />
        </div>
      ))}
    </ul>
  );
}
