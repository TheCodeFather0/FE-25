import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { customIncrement, decrement, increment, reset } from "../Slices/CounterSlice";

const Counter = () => {
    const reqem = useSelector((state) => state.reqemleOynamaq.count)
    const dispatch = useDispatch()
  return (
    <div>
      <h1>{reqem}</h1>
      <button onClick={() => dispatch(decrement())}>azalt</button>
      <button onClick={() => dispatch(increment(20))}>artir</button>
      <button onClick={() => dispatch(reset())}>sifirla</button>
      <button onClick={() => dispatch(customIncrement(100))}>custom increment</button>
    </div>
  );
};

export default Counter;
