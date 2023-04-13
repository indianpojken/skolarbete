import { Router } from 'express';

import { authorize } from '../middlewares/authorize.middleware.js';
import { validate } from '../middlewares/validate.middleware.js';

import { verifySchema } from '../schemas/verify.schema.js';

import * as ticketsController from '../controllers/tickets.controller.js';

const router = Router();

router.post('/:eventID([0-9]+)', ticketsController.buy);
router.post('/verify', validate(verifySchema), authorize, ticketsController.verify);

export { router as ticketsRouter };
