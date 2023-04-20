import dotenv from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';

import { eventsRouter } from './src/routers/events.router.js';
import { usersRouter } from './src/routers/users.router.js';
import { ticketsRouter } from './src/routers/tickets.router.js';

dotenv.config();

const app = express();
const port = 8000;

app.use(express.json());
app.use(cookieParser());

app.use('/api/events', eventsRouter);
app.use('/api/users', usersRouter);
app.use('/api/tickets', ticketsRouter);

app.listen(port);
