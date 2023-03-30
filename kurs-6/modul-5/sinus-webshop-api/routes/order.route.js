import { Router } from 'express';

import { validate } from '../middleware/validate.middleware.js';
import * as orderController from '../controllers/order.controller.js'

const router = Router();

const validator = validate({
  body: {
    shippingInfo: {
      fullName: { type: 'string' },
      address: { type: 'string' },
      city: { type: 'string' },
      zipCode: { type: 'string' },
    },
    items: [{
      serial: { type: 'string' }
    }],
  },
});

router.get('/', orderController.getAll);
router.get('/:id', orderController.getOrder);

router.post('/', validator, orderController.sendOrder);

router.patch('/:id', validator, orderController.updateOrder);

router.delete('/:id', orderController.deleteOrder);

export default router;
