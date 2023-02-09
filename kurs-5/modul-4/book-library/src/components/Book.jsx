import './Book.css';

function Book({ book, big }) {
  const size = big ? " book--big" : "";

  return (
    <article
      className={"book" + size}
      style={{ '--color': book.color }}
    >
      <section>
        <h2 className="book__title">{book.title}</h2>
        <h3 className="book__author">{book.author}</h3>
      </section>
    </article>
  );
}

export { Book };
