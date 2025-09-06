export interface Todo {
  id: string;
  title: string;
  dueDate: string;
  priority: string;
}

export interface Project {
  id: number;
  name: string;
  description?: string;
  color?: string;
  todos: Todo[];
}

export interface NewProject {
  name: string;
  description?: string;
  color?: string;
}
