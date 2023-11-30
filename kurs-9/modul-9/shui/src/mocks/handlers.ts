import { http, HttpResponse } from 'msw';
import { nanoid } from 'nanoid';
import dayjs from 'dayjs';
import 'dayjs/locale/sv';

import type { MessageData } from '@/types/types.ts';

const messages: MessageData[] = [];

export const handlers = [
  http.get('https://www.test.website/api/messages', () => {
    return HttpResponse.json({
      status: 'success',
      data: { messages },
    });
  }),

  http.post('https://www.test.website/api/messages', async ({ request }) => {
    const { text, username } = (await request.json()) as Pick<
      MessageData,
      'text' | 'username'
    >;

    const message = {
      id: nanoid(),
      text,
      username,
      date: dayjs().locale('sv').format('dddd DD MMM, HH:mm'),
    };

    messages.push(message);

    return HttpResponse.json({ success: true, data: { message } });
  }),
];
