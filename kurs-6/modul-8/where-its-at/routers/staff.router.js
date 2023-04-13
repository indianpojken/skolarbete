import { Router } from 'express';

import { validate } from '../middlewares/validate.middleware.js';

import { staffSchema } from '../schemas/staff.schema.js';

import * as staffController from '../controllers/staff.controller.js';

const router = Router();

router.post('/login', validate(staffSchema), staffController.login);
router.post('/signup', validate(staffSchema), staffController.signUp);

export { router as staffRouter };
