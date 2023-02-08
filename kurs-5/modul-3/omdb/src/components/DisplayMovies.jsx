import MovieCard from './MovieCard';

import './DisplayMovies.css';

function DisplayMovies({ movies }) {
  const list = movies.Search?.map((movie) =>
    <MovieCard
      key={movie.imdbID}
      title={movie.Title}
      year={movie.Year}
      poster={movie.Poster}
      imdb={movie.imdbID}
    />
  );

  return (
    <section className="movies">
      {movies.Response === 'True' &&
        <ol className="movies__list">
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
