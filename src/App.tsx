import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import type { Todo } from "./types";
import { v4 as uuidv4 } from "uuid";

import "./App.css";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (todo: {
    title: string;
    dueDate: string;
    priority: string;
  }) => {
    const newTodo: Todo = {
      id: uuidv4(),
      title: todo.title,
      dueDate: todo.dueDate,
      priority: todo.priority,
    };

    console.log("New todo: ", newTodo);
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (id: string) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <>
      <TodoForm onAdd={handleAddTodo} />
      <TodoList todos={todos} onDelete={handleDeleteTodo} />
    </>
  );
}

export default App;
