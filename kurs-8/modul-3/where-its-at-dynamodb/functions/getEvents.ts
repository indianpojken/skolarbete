import { createHandler, createResponse } from '../utils/handler.util.ts';

import * as eventsService from '../services/events.service.ts';

export const handler = createHandler(async (event, context) => {
  return createResponse(200, {
    status: 'success',
    data: { events: await eventsService.getAllEvents() },
  });
});
