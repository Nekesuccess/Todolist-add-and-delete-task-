import { useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      const newTodo = {
        id: Date.now(), // Simple unique ID using timestamp
        text: inputValue.trim(),
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="main_body">
      <h1>Todo List</h1>
      <div className="todo_container">
        <div className="input_container">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter Task"
            onKeyPress={(e) => e.key === "Enter" && addTodo()}
          />
          <button onClick={addTodo}>Add Task</button>
        </div>
        {todos.map((todo) => (
          <div className="task" key={todo.id}>
            <p>{todo.text}</p>
            <button className="delete-btn" onClick={() => deleteTask(todo.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
