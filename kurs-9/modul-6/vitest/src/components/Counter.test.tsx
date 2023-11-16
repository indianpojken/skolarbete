import '@testing-library/jest-dom/vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import Counter from './Counter.tsx';

describe('Component > Counter', () => {
  it(`Should render the numer '0'`, () => {
    render(<Counter />);

    const result = screen.getByText('0');

    expect(result).toHaveTextContent('0');
  });

  it(`Should render the numer '1' after click on increase`, () => {
    render(<Counter />);

    const result = screen.getByText('0');
    const button = screen.getByText('Increase');

    fireEvent.click(button);

    expect(result).toHaveTextContent('1');
  });

  it(`Should render the numer '-1' after click on decrease`, () => {
    render(<Counter />);

    const result = screen.getByText('0');
    const button = screen.getByText('Decrease');

    fireEvent.click(button);

    expect(result).toHaveTextContent('-1');
  });
});
