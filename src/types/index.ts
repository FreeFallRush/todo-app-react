export interface Todo {
  id: number;
  title: string;
  dueDate?: string;
  priority?: string;
}

export interface Project {
  id: number;
  name: string;
  description?: string;
  color?: string;
  todos: Todo[];
}
