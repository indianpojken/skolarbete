import MovieCard from './MovieCard';

import './DisplayMovies.css';

function DisplayMovies({ movies }) {
  const list = movies.Search?.map((movie) =>
    <li key={movie.imdbID}>
      <MovieCard
        title={movie.Title}
        year={movie.Year}
        poster={movie.Poster}
        imdb={movie.imdbID}
        type={movie.Type}
      />
    </li>
  );

  return (
    <section>
      {movies.Response === 'True' &&
        <ol>
          {list}
        </ol>
      }

      {movies.Response === 'False' &&
        <p>Oops, no movies with such name were found.</p>
      }
    </section>
  );
}

export default DisplayMovies;
