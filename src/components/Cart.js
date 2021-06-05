import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51Iz605Hg3ejnjMiay6z8XxHLpNimb2lMAOPxxThF1Ge4NUWcJBXfBRpwhiW5s8tXWiV3Y3md53aR1OSrH8g0I8ih00YVFeje3F');


function Cart ({ showCartModal, setShowCartModal, currentOrder, setCurrentOrder }) {
    // const toRender = showCartModal ? <div className="cart">Cart</div> : null
        const currentCart = currentOrder ? currentOrder.candyOrders.map(candyOrder => {
            return (
                <div>
                    <div>{candyOrder.candy.name}</div>
                    <div>${candyOrder.candy.price}</div>
                </div>
            )
        }) :
        null
        // console.log(currentOrder)
        // console.log(currentCart)

        const costsArray = currentOrder ? currentOrder.candyOrders.map(candyOrder => {
          return candyOrder.candy.price
        }) :
        null

        const currentTotal = currentOrder ? costsArray.reduce(( accumulator, currentValue ) => accumulator + currentValue, 0) : 0
        
    function handleCloseCart() {
        setShowCartModal(false)
    }

    const toRender = showCartModal ? <AnimatePresence>
    {showCartModal && (
      <>
        <motion.div
          initial={{ x: "100%" }}
          animate={{
            x: 0
          }}
          exit={{
            x: "100%"
          }}
          transition={{ type: "spring", bounce: 0, duration: 0.4 }}
          className="cart"
        >
          <button
            onClick={handleCloseCart}
            className="close-btn"
          >
            &times;
          </button>
          <h2>Your Bag</h2>
          <div>
            <div>{currentCart}</div>
            <h4>Total ${currentTotal}</h4>
          </div>
          {currentOrder.candyOrders.length > 0 ? <button className="login-signup-btn" role="link">Check Out</button> : null}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          transition={{ type: "spring", bounce: 0, duration: 0.2 }}
          onClick={handleCloseCart}
          className="bg-transparent px-5 fixed h-full w-full flex items-center justify-center top-0 left-0"
        />
      </>
    )}
  </AnimatePresence> : null

    return (
        toRender
    );
}

export default Cart;