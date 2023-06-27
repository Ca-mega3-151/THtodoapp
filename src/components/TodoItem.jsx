import React from "react";
import Checkbox from "./Checkbox";
import Button from "./Button";
import "./TodoItem.css";

export default function TodoItem({ todo, toggleComplete , deleteTodo}) {

  //checked lấy id 
  const handleToggleComplete = () => {
    toggleComplete(todo.id);
  };

  //xóa ghi chú 
  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <div className="todo-item">
    
      <input type="checkbox" checked={todo.completed} onChange={handleToggleComplete} />

      {todo.title}
      <button variant="danger" className="button hide  button--danger" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

