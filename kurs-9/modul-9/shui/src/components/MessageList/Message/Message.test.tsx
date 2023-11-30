import { render, screen } from '@testing-library/react';

import Message from './Message.tsx';

describe('Component > Message', () => {
  const message = {
    username: 'Nada',
    text: `I have come here to chew bubblegum and kick ass. And I'm all out of bubblegum.`,
    date: 'fredag 04 nov, 13:37',
  };

  test('Render correctly', () => {
    render(
      <Message
        username={message.username}
        text={message.text}
        date={message.date}
      />
    );

    Object.values(message).forEach((value) =>
      expect(screen.getByText(value)).toBeVisible()
    );
  });
});
