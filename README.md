# Todo App React

A full-featured **Todo App** remake with **React** and **TypeScript**, originally from [The Odin Project Curriculum – Node Path](https://www.theodinproject.com/lessons/node-path-javascript-todo-list).

- Original exercise: [GitHub Repository](https://github.com/FreeFallRush/todo-list)
- Live demo: [View Project](https://freefallrush-todo-app.netlify.app/#)

## Features

This app is a modern remake of a vanilla JS todo list with React and TypeScript, and includes:

### Project Management

- Create, edit, and delete projects.
- Each project can contain multiple todos.
- Projects persist in **localStorage**.

### Todo Management

- Add, edit, and delete todos within projects.
- Todos have:
  - `title`
  - `dueDate`
  - `priority` (`High Priority`, `Medium Priority`, etc.)
- Filtering options across all projects:
  - **All Todos**
  - **Today’s Todos**
  - **Upcoming Todos**
  - **Important Todos** (high priority)
  - **Expired Todos** (past due date)
- Todos pages are reusable via a `BaseTodosPage` component to reduce code duplication.

### UI & Layout

- **Responsive sidebar** for navigation.
- **Modal** for adding/editing projects and todos.
- **PageLayout** component used for consistent page headers and content structure.
- **Reusable components**:
  - `TodoList`
  - `ProjectList`
  - `BaseTodosPage`
  - `PageLayout`

### Data Handling

- Projects and todos are saved in **localStorage**, so data persists between sessions.
- Filtering logic is centralized in `utils/todoFilters.ts` for maintainability
