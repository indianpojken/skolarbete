import express from 'express';

import { eventsRouter } from './routers/events.router.js';
import { staffRouter } from './routers/staff.router.js';
import { ticketsRouter } from './routers/tickets.router.js';

const app = express();
const port = 8000;

app.use(express.json());

app.use('/api/events', eventsRouter);
app.use('/api/staff', staffRouter);
app.use('/api/tickets', ticketsRouter);

app.listen(port);
