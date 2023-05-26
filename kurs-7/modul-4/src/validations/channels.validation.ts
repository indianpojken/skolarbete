import { z } from 'zod';

export const create = z.object({
  body: z.object({
    name: z.string().nonempty(),
  }),
});
