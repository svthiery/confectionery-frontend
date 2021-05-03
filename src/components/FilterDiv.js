function FilterDiv({ flavor }) {
    return (
        <div>   
            <input type="checkbox" id={flavor} name={flavor} value={flavor}></input>
            <label for={flavor}>{flavor}</label>
        </div>
    );
}

export default FilterDiv;