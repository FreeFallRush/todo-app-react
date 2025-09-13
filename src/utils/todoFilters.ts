import type { Todo } from "../types";
import { formatDate } from "./date";

export const isToday = (todo: Todo) => todo.dueDate === formatDate(new Date());

export const isUpcoming = (todo: Todo) => new Date(todo.dueDate) > new Date();

export const isExpired = (todo: Todo) => new Date(todo.dueDate) < new Date();

export const isImportant = (todo: Todo) => todo.priority === "High Priority";
