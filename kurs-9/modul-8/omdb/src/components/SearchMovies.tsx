import { useState } from 'react';

interface Props {
  onSubmit: (query: string) => void;
}

export default function SearchMovies({ onSubmit }: Props) {
  const [query, setQuery] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(query);
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        minLength={1}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <input type="submit" value="Search" />
    </form>
  );
}
