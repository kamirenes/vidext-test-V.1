import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Click me",
    variant: "default",
    size: "default",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
    },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "lg", "icon"],
    },
    asChild: {
      control: { type: "boolean" },
      description: "Render as child component using Radix Slot",
    },
    onClick: { action: "clicked" },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          width={16}
          height={16}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
        </svg>
        With icon
      </>
    ),
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Go to link",
  },
};
