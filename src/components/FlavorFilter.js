import FilterDiv from "./FilterDiv"

function FlavorFilter({ flavorsSelected, setFlavorsSelected, flavorList, handleCheckBox }) {


    const flavorFilterList = flavorList.map(flavor => {
        return (
            <FilterDiv key={flavor} flavor={flavor} handleCheckBox={handleCheckBox}/>
        )
    })

    return (
        <div>
            <div className="flavor-filter-box">Flavor Filter</div>
            {flavorsSelected.length > 0 && flavorsSelected.length < flavorList.length ? <button>Clear</button> : null}
            <ul>{flavorFilterList}</ul>
        </div>
    )
}

export default FlavorFilter;