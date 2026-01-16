import { create } from "zustand";
import { colors } from "../styles/colors";

const twoColors = [colors.primary, colors.secondary];

export const useTodoStore = create((set, get) => ({
  todos: [],

  addTodo: (text) => {

    const state = get();

    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };

    set({
      todos: [...state.todos, newTodo],
    });
  },

  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter(todo => todo.id !== id)
    })),

  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),
}));
