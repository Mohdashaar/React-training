import { useState } from "react";
function Counter() {
  let [counter, setCounter] = useState(0);
  return (
    <div className="m-3">
      <h1 className="text-warning my-3">Counter App</h1>
      <div>
        <button
          className="btn btn-success"
          disabled={counter < 10 ? false : true}
          onClick={() => {
            counter < 10 ? setCounter(counter + 1) : setCounter(counter);
          }}
        >
          Increment
        </button>
        <button
          className="btn btn-success mx-3"
          disabled={counter > 0 ? false : true}
          onClick={() => {
            counter > 0 ? setCounter(counter - 1) : setCounter(counter);
          }}
        >
          Decrement
        </button>
      </div>
      <h3 className="mt-3">
        Count: <span className="badge bg-secodary">{counter}</span>
      </h3>
    </div>
  );
}
export default Counter;
