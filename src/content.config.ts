import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string(),
    'time-to-read': z.string(),
    url: z.string(),
    cloudinaryImageFileName: z.string().optional(),
    categories: z.array(z.string()),
    mainImageUrl: z.string().optional(),
    homePageImageUrl: z.string().optional(),
    listImageUrl: z.string().optional(),
  }),
});

export const collections = { blog };
