import { customAlphabet } from 'nanoid';

import { database } from './database.service.ts';

import { getEventById, reduceTickets } from './events.service.ts';

import { ApiError } from '../errors/api.error.ts';

export async function getTicketByNumber(number: string) {
  const { Item: ticket } = await database
    .get({
      TableName: 'tickets',
      Key: { number },
    })
    .promise();

  if (ticket) {
    return ticket;
  } else {
    throw new ApiError(404, {
      message: `No ticket with the number: '${number}' was found`,
    });
  }
}

export async function createTicket(eventId: number) {
  const event = await getEventById(eventId);
  delete event.tickets;

  const number = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', 6)();

  await database
    .put({
      TableName: 'tickets',
      Item: {
        number,
        verified: false,
        event,
      },
    })
    .promise();

  await reduceTickets(eventId);

  return await getTicketByNumber(number);
}

export async function verifyTicket(number: string) {
  const ticket = await getTicketByNumber(number);

  if (!ticket.verified) {
    return await database
      .update({
        TableName: 'tickets',
        Key: { number },
        UpdateExpression: 'set verified = :verified',
        ExpressionAttributeValues: {
          ':verified': true,
        },
      })
      .promise();
  } else {
    throw new ApiError(400, {
      message: `Ticket with the number: '${number}' have already been verified`,
    });
  }
}
