import { Router } from 'express';

import {
  authorizationMiddleware,
  validationMiddleware,
} from '../middlewares/mod';

import { channelsValidation } from '../validations/mod';

import { channelsController } from '../controllers/mod';

export const router = Router();

router.get('/', channelsController.all);

router.get('/:channel/messages', channelsController.messages);

router.post(
  '/create',
  authorizationMiddleware.authorize,
  validationMiddleware.validate(channelsValidation.create),
  channelsController.create
);

export { router as channelsRoute };
