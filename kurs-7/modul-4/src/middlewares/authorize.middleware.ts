import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

import { ApiError } from '../errors/api.error';

export async function authorize(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { token } = request.cookies;

  try {
    if (!token) {
      throw new Error();
    }

    response.locals.user = jwt.verify(token, process.env.JWT_SECRET as string);

    next();
  } catch (error) {
    next(new ApiError(401, { message: 'Authorization failed' }));
  }
}
