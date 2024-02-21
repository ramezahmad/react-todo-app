export default function ListInfo({
  darkMode,
  todos,
  removeCompletedTodos,
  handleFilterClick,
  filter,
}) {
  return (
    <section className={`todo-info ${darkMode ? "" : "light-bg-color-info"}`}>
      <p className={`todo-no ${darkMode ? "" : "light-bg-color"}`}>
        {todos.length} Items Left
      </p>
      <div className={`todo-status ${darkMode ? "" : "light-bg-color"}`}>
        <p
          onClick={() => handleFilterClick("All")}
          className={`${filter === "All" ? "active" : ""} ${
            darkMode === false ? "hover-light" : ""
          }`}
        >
          All
        </p>
        <p
          onClick={() => handleFilterClick("Active")}
          className={`${filter === "Active" ? "active" : ""} ${
            darkMode === false ? "hover-light" : ""
          }`}
        >
          Active
        </p>
        <p
          onClick={() => handleFilterClick("Completed")}
          className={`${filter === "Completed" ? "active" : ""} ${
            darkMode === false ? "hover-light" : ""
          }`}
        >
          Completed
        </p>
      </div>
      <p
        className={
          darkMode ? "todo-clear" : "light-bg-color hover-light todo-clear"
        }
        onClick={removeCompletedTodos}
      >
        Clear Completed
      </p>
    </section>
  );
}
