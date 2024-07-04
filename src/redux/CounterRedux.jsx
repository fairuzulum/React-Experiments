import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./feature/counterSlice";
import { Link } from "react-router-dom";

export default function CounterRedux() {
  const count = useSelector((state) => state.counter.value); // state.counter.value adalah nama state yang ada di store
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h1>Counter</h1>
        <h1>{count}</h1>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
    </>
  );
}
