import { Router } from 'express';

import {
  authorizationMiddleware,
  validationMiddleware,
} from '../middlewares/mod';

import { usersValidation } from '../validations/mod';

import { usersController } from '../controllers/mod';

export const router = Router();

router.post(
  '/login',
  validationMiddleware.validate(usersValidation.login),
  usersController.login
);

router.post(
  '/register',
  validationMiddleware.validate(usersValidation.register),
  usersController.register
);

router.post(
  '/subscribe/:channelName',
  authorizationMiddleware.authorize,
  usersController.subscribe
);

router.post(
  '/post',
  authorizationMiddleware.authorize,
  validationMiddleware.validate(usersValidation.postMessage),
  usersController.postMessage
);

router.get('/', authorizationMiddleware.authorize, usersController.info);

export { router as usersRoute };
