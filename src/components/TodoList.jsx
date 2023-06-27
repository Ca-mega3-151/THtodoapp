import TodoItem from "./TodoItem";
import "./TodoList.css";

export default function TodoList({ todos = [] , toggleComplete }) {
  
  const items = todos.map((todo) => (
    <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} />
  ));
  

  return <div className="todo-list">{items}</div>;
}

