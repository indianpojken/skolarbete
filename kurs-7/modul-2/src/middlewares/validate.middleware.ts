import { z } from 'zod';
import type { Request, Response, NextFunction } from 'express';

function formatZodError(error: z.ZodError) {
  return error.errors.map((e) => {
    return { [e.path.at(-1) as string]: e.message }
  })
}

function validate(validation: z.AnyZodObject) {
  return async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
      await validation.parseAsync(request);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        response.status(400).json({
          status: 'fail',
          data: formatZodError(error),
        });
      }
    }
  }
}

export { validate };
