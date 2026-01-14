import { create } from "zustand";

export const useTodoStore = create((set) => ({
  todos: [],
  addTodo: (text) => set((state) => ({ todos: [...state.todos, { text, completed: false, id: Date.now() }] })),
  removeTodo: (id) => set((state) => ({ todos: state.todos.filter(todo => todo.id !== id) })),
  toggleTodo: (id) => set((state) => ({
    todos: state.todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
  }))
}));
