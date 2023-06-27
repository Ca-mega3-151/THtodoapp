import "./Checkbox.css";

export default function Checkbox({ checked }) {
  return (
    <input className="todo-item-checkbox" type="checkbox" checked={checked} />
  );
}
