import { useState } from "react";
import { useOptimistic } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const [optimisticTodos, setOptimisticTodo] = useOptimistic(
    todos,
    (oldTodos, newTodo) => [...oldTodos, { text: newTodo, pending: true }],
  );

  const handleAddTodo = async (formData) => {
    const newTodo = formData.get("todo");

    setOptimisticTodo(newTodo);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setTodos((currentTodos) => [
      ...currentTodos,
      { text: newTodo, pending: false },
    ]);
  };

  return (
    <div>
      <h2>Todo List</h2>
      {optimisticTodos.map((todo, index) => (
        <div key={index}>
          {todo.text}
          {todo.pending && <span> (Adding...)</span>}
        </div>
      ))}
      <form action={handleAddTodo}>
        <input type="text" name="todo" placeholder="Enter todo..." />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default TodoList;
