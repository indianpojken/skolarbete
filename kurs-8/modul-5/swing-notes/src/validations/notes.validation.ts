import { z } from 'zod';

export const addNote = z.object({
  title: z.string().min(1).max(50),
  text: z.string().min(1).max(300),
});

export const updateNote = addNote;
