import { z } from 'zod';

export const login = z.object({
  body: z.object({
    username: z.string().min(3).max(16),
    password: z.string().min(6).max(16),
  }),
});

export const register = login.extend({});

export const postMessage = z.object({
  body: z.object({
    text: z.string(),
    channels: z.array(z.string().nonempty()).nonempty(),
  }),
});
