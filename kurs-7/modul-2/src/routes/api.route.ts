import { Router } from 'express';

import { booksRoute } from './books.route';
import { storesRoute } from './stores.route';
import { employeesRoute } from './employees.route';
import { inventoryRoute } from './inventory.route';

export const apiRoute = Router();

apiRoute.use('/books', booksRoute);
apiRoute.use('/stores', storesRoute);
apiRoute.use('/stores/:storeId/employees', employeesRoute);
apiRoute.use('/stores/:storeId/inventory', inventoryRoute);
