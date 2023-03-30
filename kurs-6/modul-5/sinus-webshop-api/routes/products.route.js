import { Router } from 'express';

import * as productsController from '../controllers/products.controller.js';

const router = Router();

router.get('/', productsController.getAll);

export default router;
