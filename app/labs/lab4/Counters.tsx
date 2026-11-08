"use client";
import { useState } from "react";
import { useCounterStore } from "./useCounterStore";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "./redux/store";
import { increment, decrement } from "./redux/counterReducer";

function ParentCounter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h4>Parent/Child Counter: {count}</h4>
      <button onClick={() => setCount(count + 1)}>Up</button>
      <button onClick={() => setCount(count - 1)}>Down</button>
    </div>
  );
}

export default function Counters() {
  const [useStateCount, setUseStateCount] = useState(0);
  const zustandCount = useCounterStore((s) => s.count);
  const zustandIncrement = useCounterStore((s) => s.increment);
  const zustandDecrement = useCounterStore((s) => s.decrement);
  const reduxCount = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h4>useState Counter: {useStateCount}</h4>
      <button onClick={() => setUseStateCount(useStateCount + 1)}>Up</button>
      <button onClick={() => setUseStateCount(useStateCount - 1)}>Down</button>

      <ParentCounter />

      <h4>Zustand Counter: {zustandCount}</h4>
      <button onClick={zustandIncrement}>Up</button>
      <button onClick={zustandDecrement}>Down</button>

      <h4>Redux Counter: {reduxCount}</h4>
      <button onClick={() => dispatch(increment())}>Up</button>
      <button onClick={() => dispatch(decrement())}>Down</button>
    </div>
  );
}