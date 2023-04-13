import { Router } from 'express';

import * as eventsController from '../controllers/events.controller.js';

const router = Router();

router.get('/', eventsController.getEvents);

export { router as eventsRouter };
