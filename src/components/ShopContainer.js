import React, { useState } from "react";
import { motion } from "framer-motion";
import ReactLoading from "react-loading";
// import Sort from "./Sort";
import FilterContainer from "./FilterContainer";
import ItemContainer from "./ItemContainer";

function ShopContainer({
  allItems,
  viewedItem,
  setViewedItem,
  showCartModal,
  handleAddToCart,
  isItemsLoading,
}) {
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
    // isFlavorAlreadySelected = figure it out
    // if (alreadySelected) - remove from array
    // else - add to array

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
          {/* <FilterContainer
            flavorsSelected={flavorsSelected}
            setFlavorsSelected={setFlavorsSelected}
            flavorList={flavorList}
            handleCheckBox={handleCheckBox}
          /> */}
          {isItemsLoading ? (
              <div className="col-12 items-loading-animation-outer">
                <div className="items-loading-animation">
                    <ReactLoading type={"spokes"} color={"grey"} height={'15%'} width={'15%'}/>
                </div>
            </div>
          ) : (
              <>
            <FilterContainer
            flavorsSelected={flavorsSelected}
            setFlavorsSelected={setFlavorsSelected}
            flavorList={flavorList}
            handleCheckBox={handleCheckBox}
          />
            <ItemContainer
              items={filteredItems}
              viewedItem={viewedItem}
              setViewedItem={setViewedItem}
              handleAddToCart={handleAddToCart}
            />
            </>
          )}
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
