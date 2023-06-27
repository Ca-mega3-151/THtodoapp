
import "./footer.css";



export default function FooterTodoApp({ count, deleteAll  }) {
  return (
  <div className="footer">
  <p>bạn có <span>{count}</span> Công việc</p>
  <button  className="button--danger" onClick={deleteAll}>Delete All</button>
  </div>
  );
  }