import { controller } from '../utils/controller.util';
import { booksService } from '../services/mod';

export const addBook = controller((request, response) => {
  const book = request.body;
  const createdBook = booksService.addBook(book);

  response.status(201).send({
    status: 'success',
    data: { book: createdBook }
  });
}, { error: 'Failed to add book' });

export const getBook = controller((request, response) => {
  const { isbn } = request.params;
  const book = booksService.getBookByISBN(isbn);

  response.status(200).send({
    status: 'success',
    data: { book }
  });
}, { error: 'Failed to get book' });

export const getAllBooks = controller((request, response) => {
  const books = booksService.getBooks();

  response.status(200).send({
    status: 'success',
    data: { books }
  });
}, { error: 'Failed to get books' });
