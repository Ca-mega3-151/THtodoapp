import { useState } from "react";
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";
import FilterForm from "./components/FilterForm";
import FilterItem from "./components/FilterItem";
import Heading from "./components/Heading";
import Input from "./components/Input";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import FooterTodoApp from "./components/footer";
import "./App.css";

const filterItems = [
  {
    value: "all",
    label: "Tất cả"
  },
  {
    value: "completed",
    label: "Đã hoàn thành"
  },
  {
    value: "active",
    label: "Chưa hoàn thành"
  }
];

export default function App() {
  const [todos, setTodos] = useState([]);

  // completed
  const [selectedFilterOption, setSelectedFilterOption] = useState("all");


// thêm ghi chú công việc 
  const onSubmit = (value) => {
    const newTodo = {
      id: todos.length + 1,
      title: value,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };



  // Thay đổi trạng thái công việc
  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };



  // Số lượng công việc/xóa tất cả

  const filteredTodos =
    selectedFilterOption === "all"
      ? todos
      : selectedFilterOption === "completed"
      ? todos.filter((item) => item.completed)
      : todos.filter((item) => !item.completed);

      //đếm số lượng item
      const count = todos.length;

      //xóa toàn bộ item
 const handleDeleteAll = () => {
  setTodos([]); // Xóa toàn bộ item bằng cách cập nhật danh sách todos thành một mảng rỗng
};

  return (
    <div className="App">
      <Heading>Simple TodoApp</Heading>

      <TodoForm onSubmit={onSubmit} />

      <FilterForm
        items={filterItems}
        value={selectedFilterOption}
        onChange={(value) => setSelectedFilterOption(value)}
      />

      <TodoList todos={filteredTodos} toggleComplete={toggleComplete}   />
      <FooterTodoApp count={count} handleDeleteAll={handleDeleteAll}   />
    </div>
  );
}

