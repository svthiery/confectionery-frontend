import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ReactLoading from 'react-loading';
import Sort from "./Sort";
import FilterContainer from "./FilterContainer";
import ItemContainer from "./ItemContainer";

function ShopContainer({ allItems, viewedItem, setViewedItem, showCartModal, setShowCartModal, handleAddToCart, isItemsLoading }) {
  const flavorList = [
    "fruit",
    // "cookies and cream",
    "dark chocolate",
    "chocolate",
    "cookie",
    // "vanilla",
    "peanut butter",
    "red velvet",
    "assorted",
    "sour",
    // "biscuits",
    // "brownie",
    // "popcorn",
    "caramel",
    // "pretzel",
    // "hazelnut",
    // "sea salt",
    "espresso",
    // "bacon",
    // "cotton candy",
    // "marshmallow",
  ];

  const [flavorsSelected, setFlavorsSelected] = useState(flavorList);

  function handleCheckBox(flavor) {
    if (flavorsSelected.length === flavorList.length) {
      const filteredFlavorList = [flavor];
      setFlavorsSelected(filteredFlavorList);
    } else if (flavorsSelected.includes(flavor)) {
      const filteredFlavorList = flavorsSelected.filter(
        (flavorItem) => flavorItem !== flavor
      );
      filteredFlavorList.length > 0
        ? setFlavorsSelected(filteredFlavorList)
        : setFlavorsSelected(flavorList);
    } else {
      const filteredFlavorList = [...flavorsSelected, flavor];
      setFlavorsSelected(filteredFlavorList);
    }
  }

  function getItemCategories(item) {
    const categories = item.categories.map((category) => {
      return category.name.toLowerCase();
    });
    return categories;
  }

  function matchesCat(item) {
    const itemCats = getItemCategories(item);
    for (let i = 0; i < itemCats.length; i++) {
      for (let j = 0; j < flavorsSelected.length; j++) {
        if (itemCats[i] === flavorsSelected[j]) {
          return true;
        }
      }
    }
  }

  const filteredItems = allItems.filter((item) => matchesCat(item));

  return (
    <motion.div
      animate={{
        // scale: showCartModal ? 0.8 : 1,
        opacity: showCartModal ? 0.5 : 1,
      }}
      transition={{ type: "spring", bounce: 0, duration: 0.4 }}
    >
      <div className="row">
        <div className="shop-container col-12">
          <div className="shop-container-image">
            <h1 className="shop-heading">SHOP</h1>
          </div>
          {/* <img src={GummyWorms} className="background-img col-12"></img> */}
          <FilterContainer
            flavorsSelected={flavorsSelected}
            setFlavorsSelected={setFlavorsSelected}
            flavorList={flavorList}
            handleCheckBox={handleCheckBox}
          />
          {isItemsLoading ? <div> 
       <ReactLoading type={"bars"} color={"grey"} />
     </div> : <ItemContainer
            items={filteredItems}
            viewedItem={viewedItem}
            setViewedItem={setViewedItem}
            handleAddToCart={handleAddToCart}
          />}
          {/* <ItemContainer
            items={filteredItems}
            viewedItem={viewedItem}
            setViewedItem={setViewedItem}
            handleAddToCart={handleAddToCart}
          /> */}
        </div>
      </div>
    </motion.div>
  );
}

export default ShopContainer;
