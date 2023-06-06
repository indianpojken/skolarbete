import { sendResponse } from './sendResponse.mjs';

export function route(method, path, callback) {
  const route = { method, path, callback: callback };

  return route;
}

export async function checkRoutes(routes, event) {
  const { method, path } = event.requestContext.http;

  for (const route of routes) {
    if (method === route.method && path === route.path) {
      return await route.callback(event?.body ? JSON.parse(event?.body) : {});
    }
  }

  return sendResponse(404, {
    status: 'error',
    message: `Route ${method}: ${path} not found`,
  });
}
