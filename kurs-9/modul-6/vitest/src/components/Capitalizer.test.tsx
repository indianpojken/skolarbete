import '@testing-library/jest-dom/vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import Capitalizer from './Capitalizer.tsx';

describe('Component > Capitalizer', () => {
  it(`Should capitalize the text 'hullaballoo' into 'Hullaballoo'`, async () => {
    render(<Capitalizer />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'hullaballoo' } });

    expect(input).toHaveValue('Hullaballoo');
  });
});
