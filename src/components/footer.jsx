import Button from "./Button";
import "./footer.css";

export default function FooterTodoApp({ count, handleDeleteAll }) {
  return (
    <div className="footer">
      <p>bạn có <span>{count}</span> Công việc</p>
      <Button variant="danger" onClick={handleDeleteAll}>Delete All</Button>
    </div>
  );
}
