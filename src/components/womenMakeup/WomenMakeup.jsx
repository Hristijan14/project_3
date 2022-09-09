import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import womenM1 from "../../assets/images/womenM1.png";
import BestSellersCard from "../bestSellersCard/BestSellersCard";

const womensMakeup = [
  {
    id: 95,
    img: `${womenM1}`,
    price: 79,
  },
  {
    id: 96,
    img: `${womenM1}`,
    price: 129,
  },
  {
    id: 97,
    img: `${womenM1}`,
    price: 200,
  },
  {
    id: 98,
    img: `${womenM1}`,
    price: 229,
  },
  {
    id: 99,
    img: `${womenM1}`,
    price: 109,
  },
  {
    id: 100,
    img: `${womenM1}`,
    price: 109,
  },
  {
    id: 101,
    img: `${womenM1}`,
    price: 109,
  },
  {
    id: 102,
    img: `${womenM1}`,
    price: 109,
  },
  {
    id: 103,
    img: `${womenM1}`,
    price: 109,
  },
  {
    id: 104,
    img: `${womenM1}`,
    price: 109,
  },
  {
    id: 105,
    img: `${womenM1}`,
    price: 109,
  },
  {
    id: 106,
    img: `${womenM1}`,
    price: 109,
  },
];

const WomenMakeup = ({ handleAddToCart, handleAddToFavorites }) => {
  return (
    <div>
      <Header />
      <div className="items-container">
        <div className="items">
          {womensMakeup.map((item) => {
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

export default WomenMakeup;
