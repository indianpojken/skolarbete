import { customAlphabet } from 'nanoid';

import { eq } from 'drizzle-orm';

import { database } from './database.service.ts';
import { tickets } from '../schemas/tickets.schema.ts';

import { getEventById } from './events.service.ts';

import { ApiError } from '../errors/api.error.ts';

export async function getTicketByNumber(number: string) {
  const ticket = await database.query.tickets.findFirst({
    where: eq(tickets.number, number),
    with: { event: true },
  });

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

  const [{ number }] = await database
    .insert(tickets)
    .values({
      eventId: event.id,
      number: customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', 6)(),
    })
    .returning({ number: tickets.number });

  return number;
}

export async function verifyTicket(number: string) {
  const ticket = await getTicketByNumber(number);

  if (!ticket.verified) {
    await database
      .update(tickets)
      .set({ verified: true })
      .where(eq(tickets.id, ticket.id));
  } else {
    throw new ApiError(400, {
      message: `Ticket with the number: '${number}' have already been verified`,
    });
  }
}
