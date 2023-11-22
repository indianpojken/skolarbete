import MovieCard from './MovieCard.tsx';

import type { Movie } from '@/types/types.ts';

interface Props {
  movies: Movie[];
}

export default function DisplayMovies({ movies }: Props) {
  const list = movies.map((movie) => (
    <MovieCard
      key={movie.imdbID}
      title={movie.Title}
      year={movie.Year}
      poster={movie.Poster}
      imdb={movie.imdbID}
    />
  ));

  return (
    <section className="movies">
      {movies.length ? (
        <ol className="movies__list">{list}</ol>
      ) : (
        <p>Oops, no movies with such name were found.</p>
      )}
    </section>
  );
}
