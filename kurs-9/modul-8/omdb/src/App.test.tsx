import '@testing-library/jest-dom/vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import App from './App.tsx';

describe('App', () => {
  it('Should display a text before searching', async () => {
    render(<App />);

    expect(
      screen.getByText('Please use the form above to search for movies.')
    ).toBeInTheDocument();
  });

  it(`Should find the movie 'Your Highness'`, async () => {
    render(<App />);

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'Your Highness' },
    });

    fireEvent.click(screen.getByRole('button', { name: 'Search' }));

    await waitFor(() => {
      expect(
        screen.queryByText('Oops, no movies with such name were found.')
      ).not.toBeInTheDocument();
    });

    expect(screen.queryByText('Your Highness')).toHaveTextContent(
      'Your Highness (2011)'
    );
  });

  it(`Should show no movies`, async () => {
    render(<App />);

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'this should not exist' },
    });

    fireEvent.click(screen.getByRole('button', { name: 'Search' }));

    expect(
      screen.queryByText('Oops, no movies with such name were found.')
    ).toBeInTheDocument();
  });
});
