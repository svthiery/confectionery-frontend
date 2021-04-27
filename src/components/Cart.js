function Cart ({showCartModal}) {
    const toRender = showCartModal ? <div className="cart">Cart</div> : null

    return (
        toRender
    );
}

export default Cart;