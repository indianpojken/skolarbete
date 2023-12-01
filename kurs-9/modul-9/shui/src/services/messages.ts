import { MessagesResponse } from '@/types/types.ts';

const uri = `https://www.test.website/api`;

export async function getMessages() {
  const endpoint = `${uri}/messages`;
  const response = await fetch(endpoint);
  const { status, data } = (await response.json()) as MessagesResponse;

  if (status === 'success') {
    return data.messages;
  } else {
    return [];
  }
}

export async function postMessage(text: string, username: string) {
  const endpoint = `${uri}/messages`;

  await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text, username }),
  });
}
