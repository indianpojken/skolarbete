import { Router } from 'express';

import { validate } from '../middleware/validate.middleware.js';
import * as cartController from '../controllers/cart.controller.js';

const router = Router();

const validator = validate({
  body: {
    serial: { type: 'string' },
  },
});

router.get('/', cartController.getCart);

router.post('/', validator, cartController.addItem);

router.delete('/', validator, cartController.removeItem);

export default router;
