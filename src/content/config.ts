import { defineCollection, z } from 'astro:content';

// NEVER include slug in the schema — Astro 4 reserves it
const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),        // meta description, 140-160 chars, direct answer
    publishedDate: z.string(),      // ISO date string
    updatedDate: z.string().optional(),
    author: z.string(),             // e.g. "Marcus Webb"
    authorRole: z.string(),         // e.g. "Network Security Analyst"
    tags: z.array(z.string()),      // 3 tags, ALL CAPS full keyword phrases
    readingTime: z.number().optional(), // minutes
    schema: z.object({
      type: z.enum(['Article', 'HowTo', 'Review', 'FAQPage']).default('Article'),
    }).optional(),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })),
  }),
});

export const collections = { blog };
