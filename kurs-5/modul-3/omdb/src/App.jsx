import { useState, useEffect } from 'react';

import SearchMovie from './components/SearchMovies';
import DisplayMovies from './components/DisplayMovies';

import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const key = '37fe945a';
  const endpoint = `http://www.omdbapi.com/?apikey=${key}&s=`;

  useEffect(() => {
    if (query) {
      async function fetchData() {
        const response = await fetch(endpoint + query);
        const data = await response.json();

        setMovies(data);
      }

      fetchData();
    }
  }, [query])

  return (
    <div className="app">
      <header>
        <SearchMovie callback={(data) => setQuery(data)} />
      </header>
      <main>
        <DisplayMovies movies={movies} />
      </main>
    </div>
  );
}

export default App;
