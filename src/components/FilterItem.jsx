import "./FilterItem.css";

export default function FilterItem({ checked, label, value }) {
  return (
    <label className="filter-item-label">
      <input
        className="filter-item-radio"
        type="radio"
        value={value}
        checked={checked}
      />

      {label}
    </label>
  );
}
