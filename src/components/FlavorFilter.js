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
            {flavorFilterList}
        </div>
    )
}

export default FlavorFilter;