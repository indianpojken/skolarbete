import { z } from 'zod';

export const addEmployee = z.object({
  body: z.object({
    name: z.string(),
  })
});
