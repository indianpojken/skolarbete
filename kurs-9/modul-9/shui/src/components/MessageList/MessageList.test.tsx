import { render, screen, within } from '@testing-library/react';

import type { MessageData } from '@/types/types.ts';

import MessageList from './MessageList.tsx';

describe('Component > MessageList', () => {
  const messages: MessageData[] = [
    {
      id: '36neOYfPeY8JukU2MqPTr',
      username: 'Fredrik',
      text: `Hallå världen!`,
      date: 'måndag 07 jan, 13:37',
    },
    {
      id: 'o7U5zgYuuZptRyCtWCGuO',
      username: 'Christina',
      text: `'Allo 'Allo!`,
      date: 'fredag 11 dec, 13:37',
    },
    {
      id: 'ewMwm9qcemKs0sOaBXFMe',
      username: 'Maja',
      text: `Salut!`,
      date: 'fredag 14 jan, 13:37',
    },
  ];

  test('No messages should be rendered', () => {
    render(<MessageList messages={[]} />);

    const items = screen.queryAllByRole('listitem');

    expect(items.length).toBe(0);
  });

  test('Messages should be rendered', () => {
    render(<MessageList messages={messages} />);

    const items = screen.queryAllByRole('listitem');

    expect(items.length).toBe(messages.length);

    items.forEach((item, index) => {
      const { id, ...rest } = messages[index];

      Object.values(rest).forEach((value) => {
        expect(within(item).getByText(value)).toBeVisible();
      });
    });
  });
});
