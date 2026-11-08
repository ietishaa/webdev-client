"use client";
import { useState } from "react";
import { useTodoStore } from "./useTodoStore";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "./redux/store";
import { setTitle, addTodo, editTodo, deleteTodo } from "./redux/todoReducer";

export default function TodoLists() {
  const zTitle = useTodoStore((s) => s.title);
  const zTodos = useTodoStore((s) => s.todos);
  const zSetTitle = useTodoStore((s) => s.setTitle);
  const zAdd = useTodoStore((s) => s.addTodo);
  const zEdit = useTodoStore((s) => s.editTodo);
  const zDelete = useTodoStore((s) => s.deleteTodo);

  const rTitle = useSelector((s: RootState) => s.todos.title);
  const rTodos = useSelector((s: RootState) => s.todos.todos);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

  return (
    <div>
      <h4>Zustand Todo List</h4>
      <input value={zTitle} onChange={(e) => zSetTitle(e.target.value)} />
      <button onClick={zAdd}>Add</button>
      <ul>
        {zTodos.map((t) => (
          <li key={t.id}>
            {editId === t.id ? (
              <>
                <input value={editText} onChange={(e) => setEditText(e.target.value)} />
                <button onClick={() => { zEdit(t.id, editText); setEditId(null); }}>Save</button>
              </>
            ) : (
              <>
                {t.text} <button onClick={() => { setEditId(t.id); setEditText(t.text); }}>Edit</button>
                <button onClick={() => zDelete(t.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>

      <h4>Redux Todo List</h4>
      <input value={rTitle} onChange={(e) => dispatch(setTitle(e.target.value))} />
      <button onClick={() => dispatch(addTodo())}>Add</button>
      <ul>
        {rTodos.map((t) => (
          <li key={t.id}>
            {editId === -t.id ? (
              <>
                <input value={editText} onChange={(e) => setEditText(e.target.value)} />
                <button onClick={() => { dispatch(editTodo({ id: t.id, text: editText })); setEditId(null); }}>Save</button>
              </>
            ) : (
              <>
                {t.text} <button onClick={() => { setEditId(-t.id); setEditText(t.text); }}>Edit</button>
                <button onClick={() => dispatch(deleteTodo(t.id))}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}