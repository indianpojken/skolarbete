import { z } from 'zod';

export const ticketNumber = z.object({
  body: z.object({
    number: z.string().length(6),
  }),
});
