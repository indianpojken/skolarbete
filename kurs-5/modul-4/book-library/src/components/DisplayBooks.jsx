import { Link } from 'react-router-dom';

import { Book } from './Book';

import './DisplayBooks.css';

function DisplayBooks({ books }) {
  return (
    <section className="books">
      {books.map((book) =>
        <Link
          to={'/book/' + book.id}
          key={book.id}
          style={{ textDecoration: 'none' }}
        >
          <Book book={book} />
        </Link>
      )}
    </section>
  );
}

export { DisplayBooks };
