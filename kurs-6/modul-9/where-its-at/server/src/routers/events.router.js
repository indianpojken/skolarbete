import { Router } from 'express';

import { authorize } from '../middlewares/authorize.middleware.js';
import { verifyRole } from '../middlewares/verifyRole.middleware.js';
import { validate } from '../middlewares/validate.middleware.js'

import { eventValidator } from '../validators/event.validator.js';

import * as eventsController from '../controllers/events.controller.js';

const router = Router();

router.get('/', authorize, eventsController.events);
router.post('/', authorize, verifyRole('admin'), validate(eventValidator), eventsController.add)
router.delete('/:eventID([a-zA-Z0-9]+)', authorize, verifyRole('admin'), eventsController.remove)

export { router as eventsRouter };
