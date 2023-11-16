import { render, screen } from '@testing-library/react';

import HelloWorld from './HelloWorld.tsx';

describe('Component > HelloWorld', () => {
  it(`Should render the text 'Hello World'`, () => {
    render(<HelloWorld />);

    const element = screen.queryByText(/^Hello World$/);

    expect(element).not.toBeNull();
  });
});
