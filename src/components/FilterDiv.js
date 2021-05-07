function FilterDiv({ flavor, handleCheckBox }) {
  return (
    <li className="filter-li col-12">
      <input
        className="filter-check-box"
        type="checkbox"
        id={flavor}
        name={flavor}
        value={flavor}
        onChange={(e) => handleCheckBox(e.target.value)}
      ></input>
      <label for={flavor} className="filter-label">
        {flavor}
      </label>
    </li>
  );
}

export default FilterDiv;
