import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./Cart.scss";
import { useState } from "react";

const Cart = ({ cartItems, handleAddToCart, handleRemoveItem }) => {
  const [checkout, setCheckout] = useState(false);
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  const showCheckout = () => {
    setCheckout(!checkout);
  };

  const handleOnSubmitCheckout = () => {
    alert("Your Purchase was finished. Thanks you !");
    localStorage.clear("cartItem");
  };

  return (
    <div>
      <Header />
      <div className="cart-container">
        {checkout && (
          <div className="checkout-container">
            <form
              className="form-section-checkout"
              onSubmit={handleOnSubmitCheckout}
            >
              <label htmlFor="fullname">Full Name:</label>
              <input type="text" id="fullname" required />
              <label htmlFor="email">E-mail:</label>
              <input type="email" id="email" required />
              <label htmlFor="address">Address:</label>
              <input type="text" id="address" required />
              <label htmlFor="cardnumber">Card Number:</label>
              <input type="number" id="cardnumber" required />
              <div className="card-details-section">
                <label htmlFor="CCV"></label>
                <input
                  type="text"
                  id="CCV"
                  required
                  className="smallwidth"
                  placeholder="CCV"
                />
                <label htmlFor="exdate"></label>
                <input
                  type="date"
                  id="exdate"
                  placeholder="expiration date"
                  required
                  className="expirationDate"
                />
              </div>
              <h2>
                Price:
                {totalPrice}€
              </h2>
              <div>
                <button type="submit" className="checkout-btn">
                  Make Purchase
                </button>
                <button
                  className="checkout-btn"
                  onClick={() => setCheckout(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
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
        <button className="checkout-button" onClick={showCheckout}>
          Check Out
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
