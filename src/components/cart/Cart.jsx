import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./Cart.scss";

const Cart = ({ cartItems, handleAddToCart, handleRemoveItem }) => {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  return (
    <div>
      <Header />
      <div className="cart-container">
        {cartItems.length === 0 && (
          <div className="empty-cart"> The Cart Is Empty</div>
        )}
        {cartItems.map((item) => (
          <div key={item.id} className="cart-section">
            <div>
              <img src={item.img} alt="clothes" className="cart-img" />
            </div>
            <p>
              <b>Quantity: ({item.quantity})</b> * <b>Price:{item.price}</b>
            </p>
            <div>
              <button
                className="cart-button"
                onClick={() => handleAddToCart(item)}
              >
                +
              </button>
              <button
                className="cart-button"
                onClick={() => handleRemoveItem(item)}
              >
                -
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="total-price">
        <h1>Total Price: {totalPrice}€</h1>
        <button className="checkout-button">Check Out</button>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
