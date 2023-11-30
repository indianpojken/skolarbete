import type { MessageData } from '@/types/types.ts';

type Props = Omit<MessageData, 'id'>;

export default function Message({ username, text, date }: Props) {
  return (
    <li>
      <article>
        <p>{date}</p>

        <p>{username}</p>

        <p>{text}</p>
      </article>
    </li>
  );
}
