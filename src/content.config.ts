import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    weight: z.number().optional(),
  }),
});

const learnCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/learn" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

const aboutCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/about" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

const jyutpingCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/jyutping" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    tableOfContents: z.array(
      z.object({
        text: z.string(),
        slug: z.string(),
        depth: z.number().int().min(2).max(3),
      }),
    ),
  }),
});

export const collections = {
  about: aboutCollection,
  blog: blogCollection,
  jyutping: jyutpingCollection,
  learn: learnCollection,
};
