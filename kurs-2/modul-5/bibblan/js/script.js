const book = {
  title: 'Ropa varg',
  author: 'Nille C Nilsson',
  numPages: 312,
};

const books = [
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

function searchBook(books, title) {
  return books.find((book) => book.title === title) ?? null;
}

console.log(searchBook(books, 'Ropa varg'));
