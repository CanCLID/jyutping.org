import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content", // Markdown/MDX files
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    weight: z.number().optional(),
  }),
});

const learnCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  learn: learnCollection,
};
