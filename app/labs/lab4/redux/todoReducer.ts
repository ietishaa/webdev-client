import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Todo = { id: number; text: string };
type TodoState = { title: string; todos: Todo[] };

const initialState: TodoState = {
  title: "",
  todos: [
    { id: 1, text: "Read book" },
    { id: 2, text: "Write code" },
    { id: 3, text: "Submit lab" },
  ],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => { state.title = action.payload; },
    addTodo: (state) => { state.todos.push({ id: Date.now(), text: state.title }); state.title = ""; },
    editTodo: (state, action: PayloadAction<{ id: number; text: string }>) => {
      const t = state.todos.find((t) => t.id === action.payload.id);
      if (t) t.text = action.payload.text;
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
    },
  },
});

export const { setTitle, addTodo, editTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;