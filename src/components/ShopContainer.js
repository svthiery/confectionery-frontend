import React, { useState } from "react";
import Sort from "./Sort";
import FilterContainer from "./FilterContainer";
import ItemContainer from "./ItemContainer";

function ShopContainer({ allItems, viewedItem, setViewedItem }) {

    const flavorList = ["fruit", 
        "cookies and cream", 
        "dark chocolate", 
        "chocolate", 
        "cookie", 
        "vanilla", 
        "peanut butter", 
        "red velvet", 
        "assorted", 
        "sour", 
        "biscuits", 
        "brownie", 
        "popcorn", 
        "caramel", 
        "pretzel", 
        "hazelnut", 
        "sea salt", 
        "espresso", 
        "bacon", 
        "cotton candy", 
        "marshmallow"]

    const [flavorsSelected, setFlavorsSelected] = useState([])

    function handleCheckBox(flavor) {
        const filteredFlavorList = [...flavorsSelected, flavor]
        setFlavorsSelected(filteredFlavorList)
    }

    return (
        <div className="row">
            <div className="shop-container col-12">
                <div className="shop-container-image">
                    <h1 className="shop-heading">SHOP</h1>
                </div>
                {/* <img src={GummyWorms} className="background-img col-12"></img> */}
                <FilterContainer flavorsSelected={flavorsSelected} setFlavorsSelected={setFlavorsSelected} flavorList={flavorList} handleCheckBox={handleCheckBox}/>
                <ItemContainer allItems={allItems} viewedItem={viewedItem} setViewedItem={setViewedItem}/>
            </div>
        </div>
    );
}

export default ShopContainer;