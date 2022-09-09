import React from "react";
import "./BestSellersCard.scss";
import favorites from "../../assets/images/favorites.png";
import shopCart from "../../assets/images/shoppingCart.png";

const BestSellersCard = ({
  img,
  price,
  item,
  handleAddToCart,
  handleAddToFavorites,
}) => {
  return (
    <div className="bestSellerCard-container">
      <div>
        <img src={img} alt="clothes" className="clothe-img" />
      </div>
      <p className="price">
        <b>{price}€</b>
      </p>
      <div className="fav-cart">
        <img
          src={favorites}
          alt="favorites"
          className="cart-icon"
          onClick={() => handleAddToFavorites(item)}
        />
        <img
          src={shopCart}
          alt="shopcart"
          onClick={() => handleAddToCart(item)}
          className="cart-icon"
        />
      </div>
    </div>
  );
};

export default BestSellersCard;
