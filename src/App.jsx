import React, { useState, useEffect } from "react";
import Head from "./components/Head";
import Input from "./components/Input";
import List from "./components/List/List";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");

  const toggleMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() === "") return;
    const newTodo = {
      id: Math.floor(Math.random() * 90000000) + 10000000,
      todoText: inputValue.trim(),
      isCompleted: false,
    };
    const updatedTodos = [...todos, newTodo];
    updateTodos(updatedTodos);
    setInputValue("");
  };

  const updateTodos = (updatedTodos) => {
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const toggleTodoComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    updateTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    updateTodos(updatedTodos);
  };

  const removeCompletedTodos = () => {
    const updatedTodos = todos.filter((todo) => !todo.isCompleted);
    updateTodos(updatedTodos);
  };

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  const handleFilterClick = (filterType) => {
    setFilter(filterType);
  };
  const filteredTodos = todos.filter((todo) => {
    if (filter === "Active") {
      return !todo.isCompleted;
    } else if (filter === "Completed") {
      return todo.isCompleted;
    } else {
      return true; // Return all todos if filter is "All"
    }
  });

  return (
    <div className={`container ${darkMode ? "" : "light-bg-color"}`}>
      <header className={!darkMode ? "light-bg" : null}></header>
      <main>
        <Head onMode={toggleMode} darkMode={darkMode} />
        <Input
          type="text"
          placeholder="Enter your todo"
          mode={darkMode}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          value={inputValue}
        />
        <List
          darkMode={darkMode}
          todos={filteredTodos}
          toggleTodoComplete={toggleTodoComplete}
          removeTodo={removeTodo}
          removeCompletedTodos={removeCompletedTodos}
          handleFilterClick={handleFilterClick}
          filter={filter}
        />
      </main>
    </div>
  );
}

export default App;
