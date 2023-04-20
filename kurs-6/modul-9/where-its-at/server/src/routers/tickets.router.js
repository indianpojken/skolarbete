import { Router } from 'express';

import { authorize } from '../middlewares/authorize.middleware.js';
import { verifyRole } from '../middlewares/verifyRole.middleware.js';

import * as ticketsController from '../controllers/tickets.controller.js';

const router = Router();

router.post('/verify', authorize, verifyRole('staff'), ticketsController.verify);
router.post('/:eventID([a-zA-Z0-9]+)', authorize, verifyRole('user'), ticketsController.buy);

export { router as ticketsRouter };
