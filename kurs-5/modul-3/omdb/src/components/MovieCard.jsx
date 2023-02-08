import './MovieCard.css';

function MovieCard({ title, year, imdb, type, poster }) {
  return (
    <article className="movie">
      <aside className="movie__poster">
        <img src={poster} />
      </aside>
      <aside>
        {title}
        {year}
        {imdb}
        {type}
      </aside>
    </article>
  );
}

export default MovieCard;
