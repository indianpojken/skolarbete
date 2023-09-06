import { createHandler, createResponse } from '../utils/handler.util.ts';

import * as ticketsService from '../services/tickets.service.ts';

export const handler = createHandler(async (event, context) => {
  const eventId = Number(event.pathParameters?.eventId);

  const ticket = await ticketsService.createTicket(eventId);

  return createResponse(201, {
    status: 'success',
    data: { ticket },
  });
});
