import { create } from "zustand";

type Todo = { id: number; text: string };
type TodoState = {
  title: string;
  todos: Todo[];
  setTitle: (t: string) => void;
  addTodo: () => void;
  editTodo: (id: number, text: string) => void;
  deleteTodo: (id: number) => void;
};

export const useTodoStore = create<TodoState>((set) => ({
  title: "",
  todos: [
    { id: 1, text: "Buy milk" },
    { id: 2, text: "Walk dog" },
    { id: 3, text: "Finish homework" },
  ],
  setTitle: (t) => set({ title: t }),
  addTodo: () => set((s) => ({ todos: [...s.todos, { id: Date.now(), text: s.title }], title: "" })),
  editTodo: (id, text) => set((s) => ({ todos: s.todos.map((t) => (t.id === id ? { ...t, text } : t)) })),
  deleteTodo: (id) => set((s) => ({ todos: s.todos.filter((t) => t.id !== id) })),
}));