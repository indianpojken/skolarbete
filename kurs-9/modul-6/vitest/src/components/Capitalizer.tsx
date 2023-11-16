import { useState } from 'react';

export default function Capitalizer() {
  const [text, setText] = useState<string>('');

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const text = event.currentTarget.value;

    const capitalizedText = text
      ? text.at(0)?.toUpperCase() + text.slice(1)
      : '';

    setText(capitalizedText);
  };

  return (
    <form>
      <label>Capitalize text: </label>
      <input type="text" value={text} onChange={handleChange} />
    </form>
  );
}
