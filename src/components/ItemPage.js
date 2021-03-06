import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

function ItemPage({ allItems, showCartModal, setShowCartModal }) {

    let { itemId } = useParams();

    let selectedItem = allItems.filter(item => item.id == itemId)[0]

    const [imgView, setImgView] = useState(selectedItem.primary_img)

    function handleImgClick(event) {
        setImgView(event.target.src)
    }

    return (
        <motion.div
      animate={{
        // scale: showCartModal ? 0.8 : 1,
        opacity: showCartModal ? 0.5 : 1,
      }}
      transition={{ type: "spring", bounce: 0, duration: 0.4 }}
    >
        <div className="row">
            <div className="item-page-image-container col-5">
                <div className="row">
                    <div className="tiny-thumbnails col-2">
                        <img src={selectedItem.primary_img} alt={selectedItem.name} className="col-12 indiv-tiny-thumbnail" onClick={handleImgClick}></img>
                        <img src={selectedItem.alt_img} alt={`Close-up of ${selectedItem.name}`} className="col-12 indiv-tiny-thumbnail" onClick={handleImgClick}></img>
                    </div>
                    <div className="col-8">
                        <img src={imgView} alt={selectedItem.name} className="main-item-img col-12"></img>
                    </div>
                </div>
            </div>
            <div className="item-page-main-container col-5">
                <h2>{selectedItem.name}</h2>
            </div>
        </div>
        </motion.div>
    );
}

export default ItemPage;