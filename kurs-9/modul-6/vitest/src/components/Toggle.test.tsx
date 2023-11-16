import '@testing-library/jest-dom/vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import Toggle from './Toggle.tsx';

describe('Component > Toggle', () => {
  it(`Should render the text 'ON'`, () => {
    render(<Toggle />);

    const button = screen.queryByRole('button');

    expect(button).toHaveTextContent('ON');
  });

  it(`Should render the text 'OFF' after a click`, () => {
    render(<Toggle />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(button).toHaveTextContent('OFF');
  });
});
