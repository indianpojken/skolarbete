import Message from './Message/Message.tsx';

import type { MessageData } from '@/types/types.ts';

interface Props {
  messages: MessageData[];
}

export default function MessageList({ messages }: Props) {
  return (
    <ol>
      {messages.map((message) => (
        <Message
          key={message.id}
          username={message.username}
          text={message.text}
          date={message.date}
        />
      ))}
    </ol>
  );
}
