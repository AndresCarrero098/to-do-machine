import React from "react";

import { TodoProvider } from "../TodoContext";
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
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
