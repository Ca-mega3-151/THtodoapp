import TodoItem from "./TodoItem";
import "./TodoList.css";

export default function TodoList({ todos = [] , toggleComplete , deleteTodo  }) {
  
  const items = todos.map((todo) => (
    <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
  ));
  

  return <div className="todo-list">{items}</div>;
}

