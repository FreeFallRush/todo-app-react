import { useState } from "react";
import TodoForm from "./components/TodoForm";
import type { Todo } from "./types";

import "./App.css";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (title: string) => {
    const newTodo: Todo = {
      id: todos.length + 1,
      title,
    };
    console.log("New todo: ", newTodo);
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <TodoForm onAdd={handleAddTodo} />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
