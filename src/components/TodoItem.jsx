import React from "react";
import Checkbox from "./Checkbox";
import Button from "./Button";
import "./TodoItem.css";

export default function TodoItem({ todo, toggleComplete }) {
  const handleToggleComplete = () => {
    toggleComplete(todo.id);
  };

  return (
    <div className="todo-item">
    
      <Checkbox checked={todo.completed} onChange={handleToggleComplete} />

      {todo.title}
      <Button variant="danger" className="hide">
        Delete
      </Button>
    </div>
  );
}

