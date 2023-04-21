import { Router } from 'express';

import { validate } from '../middlewares/validate.middleware.js';

import { userValidator } from '../validators/user.validator.js';

import * as usersController from '../controllers/users.controller.js';

const router = Router();

router.post('/login', validate(userValidator), usersController.login);
router.post('/signup', validate(userValidator), usersController.signup);

export { router as usersRouter };
