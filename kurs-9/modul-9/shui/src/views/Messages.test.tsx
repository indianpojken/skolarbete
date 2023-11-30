import { render, screen } from '@testing-library/react';

import Messages from './Messages.tsx';
import { BrowserRouter } from 'react-router-dom';

describe('View > Messages', () => {
  test('Render explanatory text when there are no messages', () => {
    render(
      <BrowserRouter>
        <Messages />
      </BrowserRouter>
    );

    const text = 'Du har inga meddelanden att visa.';

    expect(screen.getByText(text)).toBeVisible();
  });
});
