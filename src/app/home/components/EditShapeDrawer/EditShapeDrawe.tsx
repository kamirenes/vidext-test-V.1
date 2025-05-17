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
        Edit
      </Button>
      <Drawer
        open={isOpen}
        onOpenChange={(open) => !open && closeDrawer()}
        direction="right"
      >
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Edit Shape</DrawerTitle>
          </DrawerHeader>
          <div className="p-4 space-y-2">
            <div>
              <label
                htmlFor="type"
                className="text-sm font-medium text-foreground"
              >
                Type
              </label>
              <Input
                type="text"
                placeholder="Type (e.g. circle)"
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="border p-1"
                title="Type"
              />
            </div>
            <div className="mt-2">
              <label
                htmlFor="type"
                className="text-sm font-medium text-foreground"
              >
                Color
              </label>
              <Input
                type="text"
                placeholder="Color (e.g. red)"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="border p-1"
                title="Color"
              />
            </div>
            <div className="w-50">
              <label
                htmlFor="type"
                className="text-sm font-medium text-foreground"
              >
                Color
              </label>
              <Input
                type="number"
                placeholder="Size"
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
                className="border p-1"
                title="Size"
              />
            </div>
          </div>
          <DrawerFooter>
            <div className="flex justify-end gap-2">
              <Button onClick={handleUpdate} disabled={loading}>
                Save
              </Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
