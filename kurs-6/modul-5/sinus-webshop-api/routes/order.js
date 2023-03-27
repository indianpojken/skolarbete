import { Router } from 'express';

import Datastore from 'nedb-promises'

import { validate } from '../middleware/validate.js';
import { Product } from '../helpers/product.js';

const router = Router();

router.post('/',
  validate({
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
  }),
  async (request, response) => {
    const { shippingInfo, items } = request.body;

    const db = Datastore.create('orders.db');

    try {
      const products = items.map((item) => new Product(item.serial).details);

      const order = {
        shippingInfo,
        items: products,
        total: products.reduce((acc, item) => acc + item.price, 0),
      };

      await db.insert(order);
      response.status(201).json({ success: true });
    } catch (error) {
      response.status(400).json({ success: false, error: error.message });
    }
  }
);

export default router;
