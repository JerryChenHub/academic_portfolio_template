import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const linkSchema = z.object({
  label: z.string(),
  url: z.url(),
});

const research = defineCollection({
  loader: glob({
    base: './src/content/research',
    pattern: '**/*.md',
  }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string(),
    summary: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    year: z.number(),
    order: z.number(),
    image: z.string(),
    imageAlt: z.string(),
    imageFit: z.enum(['cover', 'contain']).optional(),
    detailImage: z.string().optional(),
    detailImageAlt: z.string().optional(),
    detailImageCaption: z.string().optional(),
    projectPage: z.string().optional(),
    award: z.string().optional(),
    links: z.array(linkSchema),
  }),
});

export const collections = { research };
