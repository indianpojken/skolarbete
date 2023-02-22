import { useSelector } from "react-redux";

function ViewCounter() {
  const counter = useSelector((state) => { return state.counter });

  return (
    <div className="App">
      <p>Räknaren är: { counter }</p>
    </div>
  )
}

export default ViewCounter;
