import { booksModel } from '../models/mod';

export function addBook(book: booksModel.Book): booksModel.Book {
  booksModel.createBook(book);
  return booksModel.getBookByISBN(book.isbn);
}

export function getBookById(id: number): booksModel.Book {
  const book = booksModel.getBookById(id);

  if (book) {
    return book;
  } else {
    throw new Error(`No book with ID: '${id}' exist`);
  }
}

export function getBookByISBN(isbn: string): booksModel.Book {
  const book = booksModel.getBookByISBN(isbn);

  if (book) {
    return book;
  } else {
    throw new Error(`No book with ISBN: '${isbn}' exist`);
  }
}

export function getBooks(): booksModel.Book[] {
  return booksModel.getBooks()
}
