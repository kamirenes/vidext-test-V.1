import { openai } from "@/lib/openai";
import { publicProcedure, router } from "@/lib/trpc/trpc";

export const aiRouter = router({
  suggestColor: publicProcedure.mutation(async () => {
    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `Suggest a CSS hex color for a shape. Only respond with the color code.`,
          },
        ],
      });

      return {
        color: completion.choices[0].message.content?.trim() ?? "#000000",
      };
    } catch (e) {
      console.info(e);
    }
  }),
});
