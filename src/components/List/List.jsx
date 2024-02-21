import React from "react";
import ListItem from "./ListItem";
import ListInfo from "./ListInfo";

export default function List({
  darkMode,
  todos,
  toggleTodoComplete,
  removeTodo,
  removeCompletedTodos,
  handleFilterClick,
  filter,
}) {
  return (
    <>
      <section className={`todo-list ${darkMode ? "" : "light-bg-color"}`}>
        <ul>
          {todos.map((todo) => (
            <ListItem
              key={todo.id}
              todo={todo}
              darkMode={darkMode}
              onToggleComplete={toggleTodoComplete}
              removeTodo={removeTodo}
            />
          ))}
        </ul>
      </section>
      <ListInfo
        darkMode={darkMode}
        todos={todos}
        removeCompletedTodos={removeCompletedTodos}
        handleFilterClick={handleFilterClick}
        filter={filter}
      />
    </>
  );
}
