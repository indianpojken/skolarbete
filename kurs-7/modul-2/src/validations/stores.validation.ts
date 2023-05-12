import { z } from 'zod';

export const addStore = z.object({
  body: z.object({
    name: z.string(),
  })
});
