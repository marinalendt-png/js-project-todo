import { create } from "zustand";
import { colors } from "../styles/colors";

const twoColors = [colors.primary, colors.secondary];

export const useTodoStore = create((set, get) => ({
  todos: [],
  colorIndex: 0,

  addTodo: (text) => {

    const state = get(); //hämta nuvarande state
    const color = twoColors[state.colorIndex]; //välj färg enligt twocolors (index)

    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      color, //bakgrundsfärg
    };

    //uppdaterar Todos och färgIndex
    set({
      todos: [...state.todos, newTodo],
      colorIndex: (state.colorIndex + 1) % twoColors.length,
    });
  },

  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter(todo => todo.id !== id)
    })),

  //Markera todo som klar/toggle
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),
}));
