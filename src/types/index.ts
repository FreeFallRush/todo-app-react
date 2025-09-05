export interface Todo {
  id: number;
  title: string;
  dueDate: string;
  priority: "High Priority" | "Medium Priority" | "Low Priority";
}

export interface Project {
  id: number;
  name: string;
  description?: string;
  color?: string;
  todos: Todo[];
}
