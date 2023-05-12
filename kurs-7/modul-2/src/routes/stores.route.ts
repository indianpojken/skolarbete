import { Router } from 'express';

import { validate } from '../middlewares/mod';
import { storesController } from '../controllers/mod';
import { storesValidation } from '../validations/mod';

export const storesRoute = Router();

storesRoute.post(
  '/',
  validate(storesValidation.addStore),
  storesController.addStore
);
