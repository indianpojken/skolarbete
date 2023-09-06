import { z } from 'zod';

import { ApiFail } from '../errors/api.error.ts';

import type { ParsedEvent } from './handler.util.ts';

function formatZodError(error: z.ZodError) {
  return error.errors.map((e) => ({ [e.path.at(1) as string]: e.message }));
}

export async function validate(event: ParsedEvent, validation: z.ZodSchema) {
  try {
    return await validation.parseAsync(event);
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new ApiFail(400, { data: formatZodError(error) });
    }
  }
}
