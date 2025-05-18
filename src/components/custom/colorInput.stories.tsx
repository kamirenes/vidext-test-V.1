import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { ColorInput } from "./ColorInput";
import { TColorInputProps } from "./types";

const meta: Meta<typeof ColorInput> = {
  title: "Form/ColorInput",
  component: ColorInput,
  tags: ["autodocs"],
  args: {
    color: "#ff0000",
  },
  argTypes: {
    color: {
      control: "text",
      description: "Hex color value to preview and edit",
    },
    handleColorChange: {
      action: "colorChanged",
      description: "Callback triggered when the color input changes",
    },
  },
};

export default meta;

type Story = StoryObj<TColorInputProps>;

export const Default: Story = {
  render: function ColorInputStory(args) {
    const [color, setColor] = useState(args.color);

    return (
      <ColorInput
        color={color}
        handleColorChange={(val) => {
          setColor(val);
          args.handleColorChange?.(val);
        }}
      />
    );
  },
};
