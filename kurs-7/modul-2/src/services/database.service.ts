import sqlite from 'better-sqlite3';

export const database = new sqlite('db.sqlite');

export function createTables(database: sqlite.Database) {
  [
    `
      CREATE TABLE IF NOT EXISTS stores (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL UNIQUE
      )
    `,
    `
      CREATE TABLE IF NOT EXISTS employees (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        storeId INTEGER NOT NULL,
        FOREIGN KEY (storeId) REFERENCES stores(id)
      )
    `,
    `
      CREATE TABLE IF NOT EXISTS inventory (
        storeId INTEGER NOT NULL,
        bookId INTEGER NOT NULL,
        quantity INTEGER NOT NULL,
        PRIMARY KEY (storeId, bookId),
        FOREIGN KEY (storeId) REFERENCES stores(id),
        FOREIGN KEY (bookId) REFERENCES books(id)
      )
    `,
    `
      CREATE TABLE IF NOT EXISTS books (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        pages INTEGER NOT NULL,
        isbn TEXT NOT NULL UNIQUE,
        authorId INTEGER NOT NULL,
        FOREIGN KEY (authorId) REFERENCES authors(id)
      )
    `,
    `
      CREATE TABLE IF NOT EXISTS authors (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL UNIQUE
      )
    `,
  ].forEach((statement) => database.prepare(statement).run());
}
