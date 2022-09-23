import React, { useState } from "react";

export default function App2() {
  let data = ["Item1", "Item2", "Item3"];

  let [todos, setTodos] = useState(data);

  return (
    <>
      <Addlist todos={todos} />
      <Todolist todos={todos} />
      <Button seTodos={setTodos} />
    </>
  );
}

function Addlist({ todos }) {
  return <div>The total tasks are: {todos.length}</div>;
}

function Todolist({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  );
}

function Button({ setTodos }) {
  
  function handleSubmit(event) {
    event.preventDefault();
    const todo = event.target.elements.todo.value;
    setTodos((prevTodos) => [...prevTodos, todo]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="todo" />
      <button type="submit">Add Todo</button>
    </form>
  );
}
