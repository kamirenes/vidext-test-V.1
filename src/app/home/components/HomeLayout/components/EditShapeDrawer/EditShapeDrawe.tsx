"use client";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerClose,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TShape } from "@/lib/trpc/types";
import useComponent from "./useComponent";

export function EditShapeDrawer({ shape }: { shape: TShape }) {
  const {
    color,
    isOpen,
    loading,
    type,
    size,
    closeDrawer,
    handleUpdate,
    openDrawer,
    setColor,
    setSize,
    setType,
  } = useComponent({ shape });

  return (
    <>
      <Button variant="outline" onClick={openDrawer}>
        Editar
      </Button>
      <Drawer
        open={isOpen}
        onOpenChange={(open) => !open && closeDrawer()}
        direction="right"
      >
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Editar figura</DrawerTitle>
          </DrawerHeader>
          <div className="p-4 space-y-2">
            <Input
              value={type}
              onChange={(e) => setType(e.target.value)}
              placeholder="Tipo"
            />
            <Input
              value={color}
              onChange={(e) => setColor(e.target.value)}
              placeholder="Color"
            />
            <Input
              type="number"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              placeholder="Tamaño"
            />
          </div>
          <DrawerFooter>
            <Button onClick={handleUpdate} disabled={loading}>
              Guardar
            </Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
