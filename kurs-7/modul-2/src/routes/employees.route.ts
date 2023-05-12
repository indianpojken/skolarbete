import { Router } from 'express';

import { validate } from '../middlewares/mod';
import { employeesController } from '../controllers/mod';
import { employeesValidation } from '../validations/mod';

export const employeesRoute = Router({ mergeParams: true });

employeesRoute.post(
  '/',
  validate(employeesValidation.addEmployee),
  employeesController.addEmployee
);

employeesRoute.get('/', employeesController.storesEmployees);
