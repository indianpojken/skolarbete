import './MovieCard.css';

function MovieCard({ title, year, imdb, poster }) {
  return (
    <li className="movie">
      <aside className="movie__poster">
        {poster === 'N/A'
          ? <p>N/A</p>
          : <img src={poster} />
        }
        <a className="movie__imdb" href={'https://www.imdb.com/title/' + imdb}>
          IMDb
        </a>
      </aside>
      <aside className="movie__data">
        <h2 className="movie__title">
          {title} <span>({year})</span>
        </h2>
      </aside>
    </li>
  );
}

export default MovieCard;
