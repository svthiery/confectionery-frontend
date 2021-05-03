import FilterDiv from "./FilterDiv"

function FlavorFilter() {

    const flavorList = ["fruit", "cookies and cream", "dark chocolate", "chocolate", "cookie", "vanilla", "peanut butter", "red velvet", "assorted", "sour", "biscuits", "brownie", "popcorn", "caramel", "pretzel", "hazelnut", "sea salt", "espresso", "bacon", "cotton candy", "marshmallow"]

    const flavorFilterList = flavorList.map(flavor => {
        return (
            <FilterDiv key={flavor} flavor={flavor}/>
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