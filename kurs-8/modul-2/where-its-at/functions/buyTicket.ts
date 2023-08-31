import { createHandler, createResponse } from '../utils/handler.util.ts';

import * as ticketsService from '../services/tickets.service.ts';

export const handler = createHandler(async (event, context) => {
  const eventId = Number(event.pathParameters?.eventId);

  const ticketNumber = await ticketsService.createTicket(eventId);
  const ticket = await ticketsService.getTicketByNumber(ticketNumber);

  return createResponse(201, {
    status: 'success',
    data: { ticket },
  });
});
