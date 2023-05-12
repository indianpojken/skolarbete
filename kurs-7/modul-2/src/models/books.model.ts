import { databaseService } from '../services/mod';
import { authorsModel } from './mod';

export interface Book {
  id?: number,
  title: string,
  pages: number,
  isbn: string,
  author: string,
}

export function createBook(book: Book) {
  authorsModel.createAuthor(book.author);

  databaseService.database
    .prepare(`
      INSERT INTO books (title, pages, isbn, authorId)
      VALUES (@title, @pages, @isbn, (
        SELECT id FROM authors
        WHERE name = @author
      ))
    `)
    .run(book);
}

export function getBookById(id: number): Book {
  return databaseService.database
    .prepare(`
      SELECT books.id, books.title, books.pages, books.isbn, authors.name AS author
      FROM books
      JOIN authors ON books.authorId = authors.id
      WHERE books.id = @id
    `)
    .get({ id }) as Book;
}

export function getBookByISBN(isbn: string): Book {
  return databaseService.database
    .prepare(`
      SELECT books.id, books.title, books.pages, books.isbn, authors.name AS author
      FROM books
      JOIN authors ON books.authorId = authors.id
      WHERE books.isbn = @isbn
    `)
    .get({ isbn }) as Book;
}

export function getBooks(): Book[] {
  return databaseService.database
    .prepare(`
      SELECT books.id, books.title, books.pages, books.isbn, authors.name AS author
      FROM books
      JOIN authors ON books.authorId = authors.id
    `)
    .all() as Book[];
}

