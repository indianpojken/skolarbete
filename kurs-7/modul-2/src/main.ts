import express from 'express';
import dotenv from 'dotenv';

import { errorsMiddleware } from './middlewares/mod';
import { databaseService } from './services/mod';
import { apiRoute } from './routes/api.route';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
const { database } = databaseService;

app.use(express.json());

app.use('/api', apiRoute);

app.use(errorsMiddleware.notFound);
app.use(errorsMiddleware.internalServerError);

const server = app.listen(port, () => {
  databaseService.createTables(database);
});

process.on('SIGINT', () => {
  database.close();
  server.close();
});
