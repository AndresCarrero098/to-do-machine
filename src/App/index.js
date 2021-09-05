import React from "react";

import { AppUI } from "./AppUI";

// const defaultTodos = [
//   {
//     text: "Aprender React",
//     completed: true,
//   },
//   {
//     text: "Repasar inglés",
//     completed: false,
//   },
//   {
//     text: "Hacer streaming",
//     completed: false,
//   },
// ];

function App() {
  const localStorageTodos = localStorage.getItem("TODOS_V1");
  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem("TODOS_V1", JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => todo.completed === true).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const saveTodos = (updatedTodos) => {
    const stringifiedTodos = JSON.stringify(updatedTodos);
    localStorage.setItem("TODOS_V1", stringifiedTodos);
    setTodos(updatedTodos);
  };

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const updatedTodos = [...todos];
    updatedTodos[todoIndex].completed = true;
    saveTodos(updatedTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const updatedTodos = [...todos];
    updatedTodos.splice(todoIndex, 1);
    saveTodos(updatedTodos);
  };

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
