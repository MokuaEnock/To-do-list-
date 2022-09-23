import React, { useState } from "react";


function TodoCount() {
  let [todos, setTodos] = useState(["Item 1", "Item 2", "Item 3"]);

  return <div>Total todos: {todos.length} </div>;
}

export default TodoCount;
