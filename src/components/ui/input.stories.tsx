import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  argTypes: {
    type: {
      control: "text",
      defaultValue: "text",
    },
    placeholder: {
      control: "text",
      defaultValue: "Write something...",
    },
    disabled: {
      control: "boolean",
    },
    "aria-invalid": {
      control: "boolean",
      name: "aria-invalid",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    type: "text",
    placeholder: "Write something...",
  },
};

export const Invalid: Story = {
  args: {
    type: "text",
    placeholder: "It is not valid",
    "aria-invalid": true,
  },
};

export const Disabled: Story = {
  args: {
    type: "text",
    placeholder: "Disabled",
    disabled: true,
  },
};
