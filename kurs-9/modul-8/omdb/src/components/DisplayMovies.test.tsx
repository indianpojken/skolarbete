import { render, screen, within } from '@testing-library/react';

import { data as movies } from '../mocks/data.ts';

import DisplayMovies from './DisplayMovies.tsx';

describe('Component > DisplayMovies', () => {
  test(`Should render ${movies.length} movies`, () => {
    render(<DisplayMovies movies={movies} />);

    const items = screen.getAllByRole('listitem');

    expect(items.length).toBe(movies.length);
  });

  test(`Should render titles and year correctly`, () => {
    render(<DisplayMovies movies={movies} />);

    const titles = screen
      .getAllByRole('listitem')
      .map(
        (movie, index) =>
          within(movie).getByText(movies[index].Title).textContent
      );

    expect(titles).toMatchInlineSnapshot(
      movies.map((movie) => `${movie.Title} (${movie.Year})`)
    );
  });

  test(`Should render error message if no movies were found`, () => {
    render(<DisplayMovies movies={[]} />);

    expect(
      screen.getByText('Oops, no movies with such name were found.')
    ).toBeInTheDocument();
  });
});
