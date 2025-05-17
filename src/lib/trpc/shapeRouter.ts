import { z } from "zod";
import { publicProcedure, router } from "@/lib/trpc/trpc";
import fs from "fs/promises";
import path from "path";
import { TShape } from "./types";

const dataFile = path.resolve(process.cwd(), "src/data/shapes.json");

const readShapes = async () => {
  const data = await fs.readFile(dataFile, "utf8");
  return JSON.parse(data);
};

const writeShapes = async (shapes: TShape[]) => {
  await fs.writeFile(dataFile, JSON.stringify(shapes, null, 2));
};

export const shapeRouter = router({
  getAll: publicProcedure.query(async () => {
    try {
      return await readShapes();
    } catch (e) {
      throw new Error(`Error loading the shapes list: ${e}`);
    }
  }),

  create: publicProcedure
    .input(z.object({ type: z.string(), color: z.string(), size: z.number() }))
    .mutation(async ({ input }) => {
      try {
        const shapes = await readShapes();
        const newShape = { id: Date.now().toString(), ...input };
        shapes.push(newShape);
        await writeShapes(shapes);
        return newShape;
      } catch (e) {
        throw new Error(`Error when you try to create a shape: ${e}`);
      }
    }),

  update: publicProcedure
    .input(
      z.object({
        id: z.string(),
        type: z.string(),
        color: z.string(),
        size: z.number(),
      })
    )
    .mutation(async ({ input }) => {
      try {
        const shapes = await readShapes();
        const index = shapes.findIndex((s: TShape) => s.id === input.id);
        if (index === -1) throw new Error("Shape not found");
        shapes[index] = input;
        await writeShapes(shapes);
        return input;
      } catch (e) {
        throw new Error(`Error when you try to updating a shape: ${e}`);
      }
    }),

  delete: publicProcedure.input(z.string()).mutation(async ({ input }) => {
    try {
      const shapes = await readShapes();
      const filtered = shapes.filter((s: TShape) => s.id !== input);
      await writeShapes(filtered);
      return { success: true };
    } catch (e) {
      throw new Error(`Error when you try to deleting a shape: ${e}`);
    }
  }),
});
