import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import menJ1 from "../../assets/images/menJ1.png";
import BestSellersCard from "../bestSellersCard/BestSellersCard";

const mensJeans = [
  {
    id: 23,
    img: `${menJ1}`,
    price: 79,
  },
  {
    id: 24,
    img: `${menJ1}`,
    price: 129,
  },
  {
    id: 25,
    img: `${menJ1}`,
    price: 200,
  },
  {
    id: 26,
    img: `${menJ1}`,
    price: 229,
  },
  {
    id: 27,
    img: `${menJ1}`,
    price: 109,
  },
  {
    id: 28,
    img: `${menJ1}`,
    price: 109,
  },
  {
    id: 29,
    img: `${menJ1}`,
    price: 109,
  },
  {
    id: 30,
    img: `${menJ1}`,
    price: 109,
  },
  {
    id: 31,
    img: `${menJ1}`,
    price: 109,
  },
  {
    id: 32,
    img: `${menJ1}`,
    price: 109,
  },
  {
    id: 33,
    img: `${menJ1}`,
    price: 109,
  },
  {
    id: 34,
    img: `${menJ1}`,
    price: 109,
  },
];

const MenJeans = ({ handleAddToCart, handleAddToFavorites }) => {
  return (
    <div>
      <Header />
      <div className="items-container">
        <div className="items">
          {mensJeans.map((item) => {
            return (
              <BestSellersCard
                img={item.img}
                key={item.id}
                price={item.price}
                handleAddToCart={handleAddToCart}
                item={item}
                handleAddToFavorites={handleAddToFavorites}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MenJeans;
