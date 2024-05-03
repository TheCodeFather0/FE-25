import React from "react";
import { useCounter } from './Store'


const Counter = () => {
  const count = useCounter(({ count }) => count);
  const increment = useCounter(({ increment }) => increment);
  const decrement = useCounter(({ decrement }) => decrement);
  const reset = useCounter(({ reset }) => reset);
  const customIncrement = useCounter(({ customIncrement }) => customIncrement);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={decrement}>azalt</button>
      <button onClick={increment}>artir</button>
      <button onClick={reset}>reset</button>
      <button onClick={() => customIncrement(5)}>custom increment</button>
    </div>
  );
};

export default Counter;
