import Sort from "./Sort";
import FilterContainer from "./FilterContainer";
import ItemContainer from "./ItemContainer";

function ShopContainer({ allItems, viewedItem, setViewedItem }) {
    return (
        <div className="row">
            <div className="shop-container col-12">
                <div className="shop-container-image">
                    <h1 className="shop-heading">SHOP</h1>
                </div>
                {/* <img src={GummyWorms} className="background-img col-12"></img> */}
                <FilterContainer />
                <ItemContainer allItems={allItems} viewedItem={viewedItem} setViewedItem={setViewedItem}/>
            </div>
        </div>
    );
}

export default ShopContainer;