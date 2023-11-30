import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import PostMessage from './PostMessage.tsx';

describe('View > PostMessage', () => {
  const text = `I'll be back!`;
  const username = 'Terminator';

  test('Render correctly', () => {
    render(
      <BrowserRouter>
        <PostMessage />
      </BrowserRouter>
    );

    expect(
      screen.getByPlaceholderText('Skriv ett meddelande här...')
    ).toBeVisible();
    expect(screen.getByPlaceholderText('Användarnamn')).toBeVisible();
    expect(screen.getByRole('button', { name: 'Publicera' }));
  });

  test('Fill out form', async () => {
    render(
      <BrowserRouter>
        <PostMessage />
      </BrowserRouter>
    );
    const user = userEvent.setup();

    const textarea = screen.getByPlaceholderText('Skriv ett meddelande här...');
    const input = screen.getByPlaceholderText('Användarnamn');

    await user.type(textarea, text);
    await user.type(input, username);

    expect(textarea).toHaveValue(text);
    expect(input).toHaveValue(username);
  });
});
