import type { Request, Response } from 'express';
import { createErrorResponse } from '../utils/error.util';

export function controller(
  body: (request: Request, response: Response) => void,
  errorResponse: { httpCode?: number, error: string }
) {
  return (request: Request, response: Response) => {
    try {
      body(request, response);
    } catch (err) {
      response
        .status(errorResponse?.httpCode || 400)
        .send(
          createErrorResponse(errorResponse.error, err as Error)
        );
    }
  }
}
