import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const events = pgTable('events', {
  id: serial('id').primaryKey(),
  artist: text('artist'),
  date: text('date'),
  arena: text('arena'),
  time: text('time'),
  price: text('price'),
});

export type Event = typeof events.$inferSelect;
