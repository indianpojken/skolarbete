import joi from 'joi';
import { sendResponse } from './sendResponse.mjs';

export async function errorHandler(callback) {
  try {
    return await callback();
  } catch (error) {
    if (error instanceof joi.ValidationError) {
      return sendResponse(400, {
        status: 'fail',
        data: {
          errors: error.details.map((err) => ({ [err.path]: err.message })),
        },
      });
    } else if (error instanceof Error) {
      return sendResponse(400, {
        status: 'error',
        message: error.message,
      });
    } else {
      return sendResponse(500, {
        status: 'error',
        message: 'Internal Server Error',
      });
    }
  }
}
