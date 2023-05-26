import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

dotenv.config();

import { databaseService } from './services/mod';
import { errorsMiddleware } from './middlewares/mod';
import { routes } from './routes';

const app = express();
const port = process.env.PORT || 8000;

const { database } = databaseService;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/api', routes);

app.use(errorsMiddleware.errors);

app.listen(port);
