import { Router } from 'express';

import { validate } from '../middlewares/mod';
import { inventoryController } from '../controllers/mod';
import { inventoryValidation } from '../validations/mod';

export const inventoryRoute = Router({ mergeParams: true });

inventoryRoute.post(
  '/',
  validate(inventoryValidation.addBookToInventory),
  inventoryController.addBookToInventory
);

inventoryRoute.get('/', inventoryController.storesInventory);
