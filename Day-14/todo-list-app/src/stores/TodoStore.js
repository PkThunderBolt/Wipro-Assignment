// src/stores/TodoStore.js
import Dispatcher from "../dispatcher/Dispatcher";

class TodoStore {
  constructor() {
    this.todos = [];
    this.listeners = [];

    Dispatcher.register((action) => {
      switch (action.type) {
        case "ADD_TODO":
          this.todos.push(action.payload);
          this.emitChange();
          break;
        default:
          break;
      }
    });
  }

  getTodos() {
    return this.todos;
  }

  onChange(listener) {
    this.listeners.push(listener);
  }

  emitChange() {
    this.listeners.forEach((listener) => listener(this.todos));
  }
}

export default new TodoStore();
