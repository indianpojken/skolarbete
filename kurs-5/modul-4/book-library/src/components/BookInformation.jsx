import { Book } from './Book';

import './BookInformation.css';

function BookInformation({ book }) {
  const stats = [
    { title: "Audience", property: "audience" },
    { title: "First published", property: "year" },
    { title: "Pages", property: "pages" },
    { title: "Publisher", property: "publisher" },
  ]

  const statsList = stats.map((stat) => {
    if (book[stat.property]) {
      return (
        <li key={stat.title}>
          <p>{stat.title}: <span>{book[stat.property]}</span></p>
        </li>
      )
    }
  });

  return (
    <section className="book-information">
      <Book book={book} big />

      <article className='book-information__data'>
        <header>
          <h2 className="book-information__title">{book.title}</h2>
          <h3 className="book-information__author">{book.author}</h3>
        </header>

        <p className="book-information__plot">
          {book.plot}
        </p>

        <ol className="book-information__stats">
          {statsList}
        </ol>
      </article>
    </section>
  );
}

export { BookInformation };
