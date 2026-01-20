import { defineCollection, z } from "astro:content";


const blogCollection = defineCollection({
  type: "content", // 'content' for Markdown/MDX files
  schema: z.object({
    title: z.string(),
    description: z.string().optional(), // Optional description
    weight: z.number().optional(), // Add weight property
    // Add other common frontmatter fields as needed, e.g.:
    // date: z.date().optional(),
    // tags: z.array(z.string()).optional(),
  }),
});


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
