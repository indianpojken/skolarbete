import { sendResponse } from './sendResponse.mjs';
import { errorHandler } from './errorHandler.mjs';

export function route(method, path, callback) {
  return { method, path, callback: callback };
}

export async function checkRoutes(routes, event) {
  const { method, path } = event.requestContext.http;

  for (const route of routes) {
    if (method === route.method && path === route.path) {
      return await errorHandler(async () =>
        route.callback(event?.body ? JSON.parse(event?.body) : {})
      );
    }
  }

  return sendResponse(404, {
    status: 'error',
    message: `Route ${method}: ${path} not found`,
  });
}
