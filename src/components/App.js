import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../logo.svg";
import "../App.css";
import Header from "./Header";
import ShopContainer from "./ShopContainer";
import ItemPage from "./ItemPage";
import Cart from "./Cart";
import Login from "./Login";
import Signup from "./Signup";
import Search from "./Search";

function App() {

  const [currentUser, setCurrentUser] = useState(null);

  // ----------- MODALS STATE -------------------------------------
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);

  // ----------- ITEMS --------------------------------------

  const [allItems, setAllItems] = useState([]);

  const [viewedItem, setViewedItem] = useState(null);

  // ----------- USE EFFECTS ------------------------------------

  useEffect(() => {
    fetch("http://localhost:3001/candies")
      .then((response) => response.json())
      .then((candiesArr) => {
        setAllItems(candiesArr);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({user_id: 1, status: "open"}),
    })
      .then((response) => response.json())
      .then((newOrder) => {
        console.log("Success:", newOrder);
        setCurrentCart(newOrder)
      })
  }, []);

  // ----------- CART --------------------------------------------
  const [currentCart, setCurrentCart] = useState([]);

  function handleAddToCart(item) {
    console.log(item);
  }

  return (
    <div className="app">
      <Router>
        <Header
          showCartModal={showCartModal}
          setShowCartModal={setShowCartModal}
        />
        <Login showLoginModal={showLoginModal} />
        <Signup showSignupModal={showSignupModal} />
        <Search showSearchModal={showSearchModal} />
        <Switch>
          <Route path="/shop/:itemId">
            <ItemPage
              allItems={allItems}
              showCartModal={showCartModal}
              setShowCartModal={setShowCartModal}
            />
          </Route>
          <Route path="/">
            <ShopContainer
              allItems={allItems}
              viewedItem={viewedItem}
              setViewedItem={setViewedItem}
              showCartModal={showCartModal}
              setShowCartModal={setShowCartModal}
              handleAddToCart={handleAddToCart}
            />
          </Route>
        </Switch>
        <Cart
          showCartModal={showCartModal}
          setShowCartModal={setShowCartModal}
        />
        {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */}
      </Router>
    </div>
  );
}

export default App;
