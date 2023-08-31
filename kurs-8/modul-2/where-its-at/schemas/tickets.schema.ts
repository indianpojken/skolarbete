import { pgTable, serial, boolean, integer, text } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

import { events } from './events.schema.ts';

export const tickets = pgTable('tickets', {
  id: serial('id').primaryKey(),
  number: text('number').notNull(),
  verified: boolean('verified').default(false),
  eventId: integer('event_id').notNull(),
});

export const ticketsRelations = relations(tickets, ({ one }) => ({
  event: one(events, {
    fields: [tickets.eventId],
    references: [events.id],
  }),
}));

export type Ticket = typeof tickets.$inferSelect;
