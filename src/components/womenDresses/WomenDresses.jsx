import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import womenD1 from "../../assets/images/womenD1.png";
import BestSellersCard from "../bestSellersCard/BestSellersCard";

const womensDresses = [
  {
    id: 71,
    img: `${womenD1}`,
    price: 79,
  },
  {
    id: 72,
    img: `${womenD1}`,
    price: 129,
  },
  {
    id: 73,
    img: `${womenD1}`,
    price: 200,
  },
  {
    id: 74,
    img: `${womenD1}`,
    price: 229,
  },
  {
    id: 75,
    img: `${womenD1}`,
    price: 109,
  },
  {
    id: 76,
    img: `${womenD1}`,
    price: 109,
  },
  {
    id: 77,
    img: `${womenD1}`,
    price: 109,
  },
  {
    id: 78,
    img: `${womenD1}`,
    price: 109,
  },
  {
    id: 79,
    img: `${womenD1}`,
    price: 109,
  },
  {
    id: 80,
    img: `${womenD1}`,
    price: 109,
  },
  {
    id: 81,
    img: `${womenD1}`,
    price: 109,
  },
  {
    id: 82,
    img: `${womenD1}`,
    price: 109,
  },
];

const WomenDresses = ({ handleAddToCart, handleAddToFavorites }) => {
  return (
    <div>
      <Header />
      <div className="items-container">
        <div className="items">
          {womensDresses.map((item) => {
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

export default WomenDresses;
