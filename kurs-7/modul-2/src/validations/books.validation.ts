import { z } from 'zod';

export const addBook = z.object({
  body: z.object({
    title: z.string(),
    pages: z.number().int().positive(),
    isbn: z.string(),
    author: z.string(),
  })
});
