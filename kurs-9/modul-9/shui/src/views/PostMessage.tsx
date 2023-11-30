import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postMessage } from '@/services/messages.ts';

interface Form {
  text: string;
  username: string;
}

export default function PostMessage() {
  const navigate = useNavigate();

  const [form, setForm] = useState<Form>({
    username: '',
    text: '',
  });

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await postMessage(form.text, form.username);
    navigate('/');
  };

  return (
    <form onSubmit={onSubmit}>
      <textarea
        name="text"
        placeholder="Skriv ett meddelande här..."
        onChange={(event) => onChange(event)}
      />
      <input
        type="text"
        name="username"
        placeholder="Användarnamn"
        onChange={(event) => onChange(event)}
      />
      <input type="submit" value="Publicera" />
    </form>
  );
}
