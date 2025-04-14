import { defineCollection, z } from "astro:content";

// Define a schema for the blog collection
const blogCollection = defineCollection({
  type: "content", // 'content' for Markdown/MDX files
  schema: z.object({
    title: z.string(),
    description: z.string().optional(), // Optional description
    // Add other common frontmatter fields as needed, e.g.:
    // date: z.date().optional(),
    // tags: z.array(z.string()).optional(),
  }),
});

// Define a schema for the learn collection
const learnCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    // Add other relevant fields if necessary
  }),
});

// Export a `collections` object to register your collection(s)
export const collections = {
  blog: blogCollection,
  learn: learnCollection,
};
