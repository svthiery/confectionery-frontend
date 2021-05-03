function FilterDiv({ flavor, handleCheckBox }) {
  return (
    <div>
      <input
        type="checkbox"
        id={flavor}
        name={flavor}
        value={flavor}
        onChange={(e) => handleCheckBox(e.target.value)}
      ></input>
      <label for={flavor}>{flavor}</label>
    </div>
  );
}

export default FilterDiv;
