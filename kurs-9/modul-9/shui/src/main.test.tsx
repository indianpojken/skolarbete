import { RouterProvider } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { router } from './router';

describe('Application', () => {
  const text = `I'll be back!`;
  const username = 'Terminator';

  test('Post message', async () => {
    render(<RouterProvider router={router} />);
    const user = userEvent.setup();

    await user.click(screen.getByRole('button'));

    const textarea = screen.getByPlaceholderText('Skriv ett meddelande här...');
    const input = screen.getByPlaceholderText('Användarnamn');

    await user.type(textarea, text);
    await user.type(input, username);

    await user.click(screen.getByRole('button', { name: 'Publicera' }));

    expect(
      screen.queryByText('Du har inga meddelanden att visa.')
    ).not.toBeInTheDocument();

    expect(screen.getByText(text)).toBeVisible();
    expect(screen.getByText(username)).toBeVisible();
  });
});
