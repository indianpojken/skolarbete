import { useState } from 'react';

import './SearchMovies.css';

function SearchMovie({ callback }) {
  const [search, setSearch] = useState('');

  const callCallback = (event) => {
    if (event.key === 'Enter') {
      callback(search);
    }
  }

  return (
    <article>
      <input
        type="text" name="search" minLength="1" maxLength="20"
        onChange={(event) => setSearch(event.target.value)}
        onKeyDown={callCallback}
      />
    </article>
  );
}

export default SearchMovie;
