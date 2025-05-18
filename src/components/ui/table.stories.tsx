import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "./table";

const meta: Meta = {
  title: "Components/Table",
  component: Table,
};

export default meta;

type Story = StoryObj;

export const BasicTable: Story = {
  render: () => (
    <Table>
      <TableCaption>Shapes list</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Color</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Size</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>#234ds3</TableCell>
          <TableCell>Circle</TableCell>
          <TableCell>12</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>2</TableCell>
          <TableCell>#se3411</TableCell>
          <TableCell>Triangle</TableCell>
          <TableCell>20</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>2/2</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};
