import { eq } from 'drizzle-orm';

import { database } from './database.service.ts';
import { events } from '../schemas/events.schema.ts';

import { ApiError } from '../errors/api.error.ts';

export async function getAllEvents() {
  return await database.select().from(events);
}

export async function getEventById(id: number) {
  const event = await database.query.events.findFirst({
    where: eq(events.id, id),
  });

  if (event) {
    return event;
  } else {
    throw new ApiError(404, {
      message: `No event with the id: '${id}' was found`,
    });
  }
}
