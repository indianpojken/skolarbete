import { z } from 'zod';

import type { APIGatewayProxyEvent } from 'aws-lambda';

import { ApiFail } from '../errors/api.error.ts';

function formatZodError(error: z.ZodError) {
  return error.errors.map((e) => ({ [e.path.at(1) as string]: e.message }));
}

export async function validate(
  event: APIGatewayProxyEvent,
  validation: z.ZodSchema
) {
  try {
    const context = {
      body: JSON.parse(event.body || ''),
      pathParams: event.pathParameters,
    };

    return await validation.parseAsync(context);
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new ApiFail(400, { data: formatZodError(error) });
    }
  }
}
