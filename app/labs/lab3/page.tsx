import "./classes.css";
import Link from "next/link";
import Add from "./Add";
import Pathname from "./Pathname";
import ServerComponentDemo from "./ServerComponentDemo";
import DestructingImports from "./DestructingImports";
import todosData from "./todos.json";

type Todo = { id: number; text: string; done: boolean };
const todos = todosData as Todo[];

export default function Lab3() {
  const isLoggedIn = false;
  const hour1 = 20;
  const hour2 = 9;
  const nullValue = null;
  const house = {
    address: "123 Main St",
    bathrooms: 2,
    owners: ["Alice", "Bob", "Carol"],
    garage: { cars: 2 },
  };
  const houseNoGarage: { garage?: { cars: number } } = {};

  const bgRed = { backgroundColor: "red", padding: 10, color: "white", marginBottom: 4 };
  const bgBlue = { backgroundColor: "blue", padding: 10, color: "white", marginBottom: 4 };
  const bgYellow = { backgroundColor: "gold", padding: 10, marginBottom: 4 };
  const bgGreen = { backgroundColor: "green", padding: 10, color: "white", marginBottom: 4 };

  return (
    <div>
      <h2>Lab 3 - JavaScript</h2>

      <h3>Variables and Constants</h3>
      <p>Variables (let) can change; constants (const) cannot be reassigned.</p>

      <h3>Template Literals</h3>
      <p>{`Hello, ${house.address}!`}</p>

      <h3>Arrow Functions</h3>
      <p>{(() => 2 + 3)()} (an arrow function returning 2 + 3)</p>

      <h3>If Else</h3>
      <p>{hour1 < 12 ? "It is morning" : "It is not morning"}</p>
      <p>{true ? "true" : "false"}</p>
      <p>not false1</p>

      <h3>Ternary Operator</h3>
      <p>{hour1 < 12 ? "Good morning" : "Good afternoon"}</p>
      <p>{hour2 < 12 ? "Good morning" : "Good afternoon"}</p>

      <h3>Inline Conditional Rendering</h3>
      {isLoggedIn ? <h4>Welcome back!</h4> : <h4>Guest Inline</h4>}

      <h3>Nullish Coalescing</h3>
      <p>nullValue ?? &quot;default&quot; is {nullValue ?? "default"}</p>

      <h3>Arrays</h3>
      <p>Owners array: {house.owners.length} items</p>

      <h3>Array Methods: map</h3>
      <ul>
        {house.owners.map((o) => (
          <li key={o}>{o}</li>
        ))}
      </ul>

      <h3>Array Methods: filter</h3>
      <p>Owners starting with A: {house.owners.filter((o) => o.startsWith("A")).join(", ")}</p>

      <h3>Destructuring Objects</h3>
      <p>
        bathrooms: {house.bathrooms}
      </p>
      <h5>Owners</h5>
      <p>{house.owners.join(", ")}</p>

      <h3>Optional Chaining</h3>
      <p>house.garage?.cars ?? 0 is {house.garage?.cars ?? 0}</p>
      <p>house.garage?.cars ?? 0 is {houseNoGarage.garage?.cars ?? 0}</p>

      <h3>JSON.stringify</h3>
      <pre>{JSON.stringify(house, null, 2)}</pre>

      <DestructingImports />

      <h3>Classes</h3>
      <div className="wd-box-red">Red box</div>
      <div className="wd-box-blue">Blue box</div>
      <div className="wd-box-green">Green box</div>
      <div className="wd-box-yellow">Yellow box</div>
      <div className="wd-box-purple">Purple box</div>
      <div className="wd-box-orange">Orange box (sixth)</div>

      <h3>Styles</h3>
      <div style={bgRed}>Red style box</div>
      <div style={bgBlue}>Blue style box</div>
      <div style={bgYellow}>Yellow style box</div>
      <div style={bgGreen}>Green style box (fourth)</div>

      <h3>Client and Server Components</h3>
      <Pathname />
      <ServerComponentDemo />

      <h3>Components</h3>
      <Add a={5} b={7} />
      <Add a={10} b={20} />

      <h3>Path Parameters</h3>
      <ul>
        <li><Link href="/labs/lab3/add/5/7">/labs/lab3/add/5/7</Link></li>
        <li><Link href="/labs/lab3/add/10/20">/labs/lab3/add/10/20</Link></li>
        <li><Link href="/labs/lab3/add/3/4">/labs/lab3/add/3/4</Link></li>
      </ul>

      <h3>Todo List</h3>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            <input type="checkbox" defaultChecked={t.done} readOnly /> {t.text}
          </li>
        ))}
      </ul>
    </div>
  );
}