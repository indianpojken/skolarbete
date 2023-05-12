import type { Request, Response, NextFunction } from 'express';

export function notFound(request: Request, response: Response) {
  response.status(404).send({
    code: 'Not Found',
    httpCode: 404,
    message: `Route ${request.method}: ${request.path} not found`,
  });
}

export function internalServerError(
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) {
  console.log(error.stack);

  response.status(500).send({
    code: 'Internal Server Error',
    httpCode: 500,
    message: `Abandon ship!`,
  });
}
