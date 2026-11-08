"use client";
import { useState } from "react";

export default function StateDemos() {
  const [checked, setChecked] = useState(false);
  const [text, setText] = useState("Hello");
  const [date, setDate] = useState("2026-01-01");
  const [person, setPerson] = useState({ name: "Alice", age: 25, city: "Boston" });
  const [items, setItems] = useState(["Apple", "Banana", "Cherry"]);
  const [newItem, setNewItem] = useState("");

  return (
    <div>
      <h4>Boolean State</h4>
      <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} /> {checked ? "Checked" : "Unchecked"}

      <h4>String State</h4>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <p>Value: {text}</p>

      <h4>Date State</h4>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <p>Date: {date}</p>

      <h4>Object State</h4>
      <pre>{JSON.stringify(person, null, 2)}</pre>
      <input value={person.name} onChange={(e) => setPerson({ ...person, name: e.target.value })} placeholder="name" />
      <input value={person.age} onChange={(e) => setPerson({ ...person, age: Number(e.target.value) })} placeholder="age" />
      <input value={person.city} onChange={(e) => setPerson({ ...person, city: e.target.value })} placeholder="city" />

      <h4>Array State</h4>
      <ul>
        {items.map((item, i) => (
          <li key={item}>
            {item} <button onClick={() => setItems(items.filter((_, idx) => idx !== i))}>Delete</button>
          </li>
        ))}
      </ul>
      <input value={newItem} onChange={(e) => setNewItem(e.target.value)} />
      <button onClick={() => { if (newItem) { setItems([...items, newItem]); setNewItem(""); } }}>Add</button>
    </div>
  );
}