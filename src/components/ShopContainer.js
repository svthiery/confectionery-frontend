import Sort from "./Sort";
import FilterContainer from "./FilterContainer";
import ItemContainer from "./ItemContainer";

function ShopContainer() {
    return (
        <div className="row">
            <div className="shop-container .col-12">
                <div>Shop Container</div>
                <Sort />
                <FilterContainer />
                <ItemContainer />
            </div>
        </div>
    );
}

export default ShopContainer;