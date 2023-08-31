import { createHandler, createResponse } from '../utils/handler.util.ts';

import * as ticketsService from '../services/tickets.service.ts';

import { validate } from '../utils/validator.util.ts';
import { ticketNumber } from '../validations/tickets.validation.ts';

export const handler = createHandler(async (event, context) => {
  const data = await validate(event, ticketNumber);
  const { number } = data.body;

  await ticketsService.verifyTicket(number);

  return createResponse(200, {
    status: 'success',
    data: null,
  });
});
