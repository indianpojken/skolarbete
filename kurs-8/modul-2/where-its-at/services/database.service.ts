import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

import * as events from '../schemas/events.schema.ts';
import * as tickets from '../schemas/tickets.schema.ts';

const connectionString = process.env.DATABASE as string;
const client = postgres(connectionString);

export const database = drizzle(client, { schema: { ...events, ...tickets } });
