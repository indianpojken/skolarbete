import { useState, useEffect } from 'react';

import type { Movie, MovieData } from './types/types.ts';

import SearchMovies from './components/SearchMovies.tsx';
import DisplayMovies from './components/DisplayMovies.tsx';

export default function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const key = '37fe945a';
    const endpoint = `http://www.omdbapi.com/?apikey=${key}&s=`;

    if (query) {
      const fetchData = async () => {
        const response = await fetch(endpoint + query);
        const data: MovieData = await response.json();

        if (data.Response === 'True') {
          setMovies(data.Search);
        }
      };

      fetchData();
    }
  }, [query]);

  return (
    <div className="app">
      <header>
        <SearchMovies onSubmit={(query: string) => setQuery(query)} />
      </header>
      <main>
        {query ? (
          <DisplayMovies movies={movies} />
        ) : (
          <p>Please use the form above to search for movies.</p>
        )}
      </main>
    </div>
  );
}
