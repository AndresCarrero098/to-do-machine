import React from "react";
import "./TodoCounter.css";

function TodoCounter({ total, completed }) {
  return (
    <h2 className="TodoCounter">
      Completadas {completed} de {total} tareas.
    </h2>
  );
}

export { TodoCounter };
