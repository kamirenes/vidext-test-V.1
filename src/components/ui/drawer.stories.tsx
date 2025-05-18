import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "./drawer";

const meta: Meta = {
  title: "Components/Drawer",
  component: Drawer,
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Open Drawer
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Drawer example</DrawerTitle>
          <DrawerDescription>This is a Drawer test.</DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <p>Your content here.</p>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <button className="bg-gray-200 px-4 py-2 rounded">Close</button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};
