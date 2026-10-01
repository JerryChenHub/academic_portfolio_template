import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const linkSchema = z.object({
  label: z.string(),
  url: z.union([z.url(), z.string().regex(/^\/?(?:media|reports|slides)\//)]),
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
    cardLink: z.string().optional(),
    award: z.string().optional(),
    links: z.array(linkSchema),
  }),
});

const mentorship = defineCollection({
  loader: glob({
    base: './src/content/mentorship',
    pattern: '**/*.md',
  }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    period: z.string(),
    role: z.string(),
    order: z.number(),
    featured: z.boolean().default(false),
    image: z.string(),
    thumbnail: z.string(),
    imageAlt: z.string(),
    imageCaption: z.string(),
    galleryHeading: z.string().default('In the lab'),
    gallery: z.array(z.object({
      image: z.string(),
      alt: z.string(),
      caption: z.string(),
      width: z.number(),
      height: z.number(),
    })),
    video: z.object({
      src: z.string(),
      poster: z.string(),
      width: z.number().int().positive().default(576),
      height: z.number().int().positive().default(1024),
      caption: z.string(),
    }).optional(),
  }),
});

export const collections = { research, mentorship };
