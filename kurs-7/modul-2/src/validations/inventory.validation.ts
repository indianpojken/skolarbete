import { z } from 'zod';

export const addBookToInventory = z.object({
  body: z.object({
    bookId: z.number().int().positive(),
    quantity: z.number().int().positive()
  })
});
