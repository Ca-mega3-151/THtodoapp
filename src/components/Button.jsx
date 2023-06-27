import "./Button.css";

export default function Button({ children, variant = "default" }) {
  return <button className={`button button--${variant}`}>{children}</button>;
}
