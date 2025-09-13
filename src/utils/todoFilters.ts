import type { Todo } from "../types";

export const isToday = (todo: Todo) => {
  const today = new Date();
  const due = new Date(todo.dueDate);
  return (
    due.getFullYear() === today.getFullYear() &&
    due.getMonth() === today.getMonth() &&
    due.getDate() === today.getDate()
  );
};

export const isUpcoming = (todo: Todo) => new Date(todo.dueDate) > new Date();

export const isExpired = (todo: Todo) => new Date(todo.dueDate) < new Date();

export const isImportant = (todo: Todo) => todo.priority === "High Priority";
