import { render, screen } from '@testing-library/react';

import MovieCard from './MovieCard.tsx';

describe('Component > MovieCard', () => {
  const title = 'The 40-Year-Old Virgin';
  const year = '2005';
  const imdb = 'tt0405422';
  const poster =
    'https://m.media-amazon.com/images/M/MV5BNWY1NDI0ZTQtMjJiNS00ODY4LWE1NmUtYTkwNzY3NWQ0ZDZjXkEyXkFqcGdeQXVyMTM0NTc2NDgw._V1_SX300.jpg';

  test(`Should render movie information correctly`, () => {
    render(<MovieCard title={title} year={year} imdb={imdb} poster={poster} />);

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(`(${year})`)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'IMDb' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Poster' })).toBeInTheDocument();
  });

  test(`Should link the correct url to IMDb`, () => {
    render(<MovieCard title={title} year={year} imdb={imdb} poster={poster} />);

    expect(screen.getByRole('link', { name: 'IMDb' })).toHaveAttribute(
      'href',
      `https://www.imdb.com/title/${imdb}`
    );
  });

  test(`Should render the text 'N/A' if no poster were provided by the API`, () => {
    render(<MovieCard title={title} year={year} imdb={imdb} poster="N/A" />);

    expect(screen.getByText('N/A')).toBeInTheDocument();
  });
});
