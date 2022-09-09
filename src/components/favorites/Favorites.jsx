import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./Favorites.scss";
import broken from "../../assets/images/broken.png";
import shopCart from "../../assets/images/shoppingCart.png";

const Favorites = ({ handleAddToCart, handleRemoveFavorite, favItems }) => {
  return (
    <div>
      <Header />
      <div className="favorites-container">
        {favItems.length === 0 && (
          <div className="empty-favorites"> You Have No Favorite Items</div>
        )}
        {favItems.map((item) => (
          <div key={item.id} className="favorite-section">
            <div>
              <img src={item.img} alt="clothes" className="favorite-img" />
            </div>
            <p>
              <b>Price:{item.price}</b>
            </p>
            <div className="defav-cart">
              <img
                src={broken}
                alt="favorites"
                className="cart-icon"
                onClick={() => handleRemoveFavorite(item)}
              />
              <img
                src={shopCart}
                alt="shopcart"
                onClick={() => handleAddToCart(item)}
                className="cart-icon"
              />
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Favorites;
