function FilterDiv({ flavor, handleCheckBox }) {
  return (
    <li>
      <input
        type="checkbox"
        id={flavor}
        name={flavor}
        value={flavor}
        onChange={(e) => handleCheckBox(e.target.value)}
      ></input>
      <label for={flavor}>{flavor}</label>
    </li>
  );
}

export default FilterDiv;
