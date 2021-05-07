import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

function Cart ({ showCartModal, setShowCartModal, currentOrder, setCurrentOrder }) {
    // const toRender = showCartModal ? <div className="cart">Cart</div> : null
        const currentCart = currentOrder ? currentOrder.candyOrders.map(candyOrder => {
            return (
                <div>
                    <div>{candyOrder.candy.name}</div>
                    <div>{candyOrder.candy.price}</div>
                </div>
            )
        }) :
        null
        // console.log(currentOrder)
        // console.log(currentCart)

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
          className="cart fixed bg-indigo-600 text-white shadow-lg top-0 right-0 w-full max-w-sm h-screen p-5"
        >
          <button
            onClick={handleCloseCart}
            className="bg-white text-black h-8 w-8 block mb-2 rounded-full"
          >
            &times;
          </button>
          <h2 className="text-4xl capitalize leading-loose">Your Cart</h2>
          <div>{currentCart}</div>
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