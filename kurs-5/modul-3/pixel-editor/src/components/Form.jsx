import { useState } from 'react';
import './Form.css';

function Form({ setSize }) {
  const defaultValue = 16;

  const [width, setWidth] = useState(defaultValue);
  const [height, setHeight] = useState(defaultValue);

  const submit = (event) => {
    event.preventDefault();
    setSize({ width: width, height: height})
  }

  return (
    <article className="form">
      <h1 className="form__title">Ange dimensioner</h1>
      <form onSubmit={submit}>
        <input
          className="number" type="number" name="width"
          min={1} max={32} defaultValue={defaultValue}
          onChange={(e) => (setWidth(e.target.value))}
        />

        <input
          className="number" type="number" name="height"
          min={1} max={32} defaultValue={defaultValue}
          onChange={(e) => (setHeight(e.target.value))}
        />

        <button className="gradient" type="submit">
          Börja rita
        </button>
      </form>
    </article>
  );
}

export default Form;
