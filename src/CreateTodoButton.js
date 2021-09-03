import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
  const onClickButton = (msg) => {
    console.log(msg);
  };
  
  return (
    <button
      className="CreateTodoButton"
      onClick={() => onClickButton("Nice click!")}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
