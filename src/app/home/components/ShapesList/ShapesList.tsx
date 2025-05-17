"use client";

import { trpc } from "@/lib/trpc/client";
import { TShape } from "@/lib/trpc/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EditShapeDrawer } from "../EditShapeDrawer/EditShapeDrawe";
import { DeleteButton } from "../DeleteButton/DeleteButton";

export default function ShapeList() {
  const { data, isLoading, error } = trpc.shape.getAll.useQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="mt-12">
      <label htmlFor="type" className="text-xl font-medium text-foreground">
        List of shapes
      </label>
      <Table className="mt-4">
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Type</TableHead>
            <TableHead  >Color</TableHead>
            <TableHead>Size</TableHead>
            <TableHead className="flex justify-end">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((shape: TShape) => (
            <TableRow key={shape.id}>
              <TableCell className="font-mono text-xs text-muted-foreground">
                {shape.id}
              </TableCell>
              <TableCell>{shape.type}</TableCell>
              <TableCell className="flex items-center h-[55px]">
                <span
                  className="inline-block h-4 w-4 rounded-full mr-2"
                  style={{ backgroundColor: shape.color }}
                />
                {shape.color}
              </TableCell>
              <TableCell>{shape.size}</TableCell>
              <TableCell>
                <div className="flex justify-end gap-2">
                  <EditShapeDrawer shape={shape} />
                  <DeleteButton shape={shape} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
