import { Router } from 'express';

import products from '../assets/products.json' assert { type: 'json' };

const router = Router();

router.get('/', (request, response) => {
  response.json(products);
});

export default router;
