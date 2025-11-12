import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoStore from "./stores/TodoStore";

function App() {
  const [todos, setTodos] = useState(TodoStore.getTodos());

  useEffect(() => {
    TodoStore.onChange((updatedTodos) => {
      setTodos([...updatedTodos]);
    });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4 text-primary">Flux Todo App</h2>
      <AddTodo />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
