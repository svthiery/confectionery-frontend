import Sort from "./Sort";
import FilterContainer from "./FilterContainer";
import ItemContainer from "./ItemContainer";

function ShopContainer() {
    return (
        <div className="shop-container">
            <div>Shop Container</div>
            <Sort />
            <FilterContainer />
            <ItemContainer />
        </div>
    );
}

export default ShopContainer;