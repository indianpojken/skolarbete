import type {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from 'aws-lambda';

import { ApiError, ApiFail } from '../errors/api.error.ts';

import type { ApiResponse } from '../types/api.type';

export function createResponse(
  code: number,
  response: ApiResponse
): APIGatewayProxyResult {
  return {
    statusCode: code,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(response),
  };
}

function errorHandler(error: Error) {
  if (error instanceof ApiFail) {
    return createResponse(error.code, {
      status: 'fail',
      data: error.data,
    });
  } else if (error instanceof ApiError) {
    return createResponse(error.code, {
      status: 'error',
      message: error.message,
      ...(error.data && { data: error.data }),
    });
  } else if (error instanceof Error) {
    return createResponse(400, {
      status: 'error',
      message: error.message,
    });
  } else {
    return createResponse(500, {
      status: 'error',
      message: 'Internal Server Error',
    });
  }
}

type Handler = (
  event: APIGatewayProxyEvent,
  context: Context
) => Promise<APIGatewayProxyResult>;

export function createHandler(callback: Handler): Handler {
  return async (event, context) => {
    try {
      return await callback(event, context);
    } catch (error) {
      return errorHandler(error as Error);
    }
  };
}
