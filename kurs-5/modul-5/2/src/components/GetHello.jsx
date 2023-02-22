import { useSelector } from 'react-redux';

function GetHello() {
  const name = useSelector((state) => { return state.name });

  if (!name) return;

  return (
    <p>Hello, <span>{name}!</span></p>
  );
}

export { GetHello };
