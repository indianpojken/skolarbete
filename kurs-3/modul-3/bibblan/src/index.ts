interface Book {
  title: string,
  author: string,
  numPages: number,
}

const book: Book = {
  title: 'Ropa varg',
  author: 'Nille C Nilsson',
  numPages: 312,
};

const books: Book[] = [
  book,
  {
    title: 'Spindeln',
    author: 'Lars Kepler',
    numPages: 255,
  },
  {
    title: 'Åren',
    author: 'Annie Ernaux',
    numPages: 279,
  },
];

function searchBook(books: Book[], title: string): (Book | null) {
  return books.find((book) => book.title === title) ?? null;
}

console.log(searchBook(books, 'Ropa varg'));
