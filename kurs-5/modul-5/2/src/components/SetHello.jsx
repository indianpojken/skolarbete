import { useDispatch, useSelector } from 'react-redux';

import { set } from '../actions/nameActions';

function SetHello() {
  const name = useSelector((state) => { return state.name });
  const dispatch = useDispatch();

  return (
    <form onSubmit={(event) => { event.preventDefault(); }}>
      <label>Name:</label>
      <input value={name} onChange={(event) => dispatch(set(event.target.value))} />
    </form>
  );
}

export { SetHello };
