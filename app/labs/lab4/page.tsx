"use client";
import { useState } from "react";
import ReduxProvider from "./redux/ReduxProvider";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import CounterBroken from "./CounterBroken";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import Counters from "./Counters";
import TodoLists from "./TodoLists";
import QueryPathParams from "./QueryPathParams";

export default function Lab4() {
  const [, setName] = useState("");
  const sayHello = (message: string) => alert(message);
  const sayMyName = () => alert("Ietisha Rathod");

  return (
    <ReduxProvider>
      <div id="wd-lab4" style={{ padding: 20 }}>
        <h2>Lab 4</h2>
        <ClickEvent />
        <PassingDataOnEvent />
        <h2>Passing Functions Demo</h2>
        <PassingFunctions message="Hello from Lab 4" theFunction={sayHello} />
        <PassingFunctions message="" theFunction={sayMyName} />
        <CounterBroken />
        <Counter />
        <BooleanStateVariables />
        <StringStateVariables />
        <DateStateVariable />
        <ObjectStateVariable />
        <ArrayStateVariable />
        <Counters />
        <TodoLists />
        <QueryPathParams />
      </div>
    </ReduxProvider>
  );
}