import ReduxProvider from "./redux/ReduxProvider";
import Counters from "./Counters";
import StateDemos from "./StateDemos";
import TodoLists from "./TodoLists";
import QueryPathParams from "./QueryPathParams";

export default function Lab4() {
  return (
    <ReduxProvider>
      <div style={{ padding: 20 }}>
        <h2>Lab 4 - Events, State, and Stores</h2>
        <Counters />
        <StateDemos />
        <TodoLists />
        <QueryPathParams />
      </div>
    </ReduxProvider>
  );
}