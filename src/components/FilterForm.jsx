import FilterItem from "./FilterItem";
import "./FilterForm.css";

export default function FilterForm({ items = [], value, onChange }) {
  const options = items.map((item) => (
    <FilterItem key={item.value} {...item} checked={value === item.value} />
  ));

  return (
    <form className="filter-form" onChange={(e) => onChange(e.target.value)}>
      {options}
    </form>
  );
}
