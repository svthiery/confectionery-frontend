import React, { useState, useEffect } from "react";
import logo from "../logo.svg";
import "../App.css";
import Header from "./Header";
import ShopContainer from "./ShopContainer";
import Cart from "./Cart";
import Login from "./Login";
import Signup from "./Signup";
import Search from "./Search";

function App() {
  // ----------- MODALS STATE -------------------------------------
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);

  // ----------- ITEMS --------------------------------------

  const [allItems, setAllItems] = useState([]);

  // ----------- USE EFFECTS ------------------------------------

  useEffect(() => {
    fetch("http://localhost:3001/candies")
      .then((response) => response.json())
      .then((candiesArr) => {
        setAllItems(candiesArr);
        console.log(allItems)
      });
  }, []);

  return (
    <div className="app">
      <Header />
      <Login showLoginModal={showLoginModal} />
      <Signup showSignupModal={showSignupModal} />
      <Search showSearchModal={showSearchModal} />
      <ShopContainer allItems={allItems}/>
      <Cart showCartModal={showCartModal} />
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
    </div>
  );
}

export default App;
