import { Router } from 'express';

import { validate } from '../middlewares/mod';
import { booksController } from '../controllers/mod';
import { booksValidation } from '../validations/mod';

export const booksRoute = Router();

booksRoute.get('/:isbn', booksController.getBook);
booksRoute.get('/', booksController.getAllBooks);

booksRoute.post(
  '/',
  validate(booksValidation.addBook),
  booksController.addBook
);
