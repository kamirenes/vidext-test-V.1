import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from "./card";
import { Button } from "@/components/ui/button";

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Your Shape Edition</CardTitle>
        <CardAction>
          <Button variant="outline" size="sm">
            Change
          </Button>
        </CardAction>
        <CardDescription>Red Circle</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          This is a description <strong>MORE</strong> description.
        </p>
      </CardContent>
      <CardFooter>
        <Button>Update</Button>
      </CardFooter>
    </Card>
  ),
};
