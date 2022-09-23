import App from "../App";
import React, { useState } from "react";

function AddTodo() {
  let [todos, setTodos] = useState(["Item 1", "Item 2", "Item 3"]);

  function handleSubmit(event) {
    event.preventDefault();
    let todo = event.target.elements.todo.value;
    setTodos((prevTodos) => [...prevTodos, todo]);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="todo" />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default AddTodo;
