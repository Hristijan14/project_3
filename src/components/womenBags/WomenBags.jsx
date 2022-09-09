import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import womenB1 from "../../assets/images/womenB1.png";
import BestSellersCard from "../bestSellersCard/BestSellersCard";

const womensBags = [
  {
    id: 59,
    img: `${womenB1}`,
    price: 79,
  },
  {
    id: 60,
    img: `${womenB1}`,
    price: 129,
  },
  {
    id: 61,
    img: `${womenB1}`,
    price: 200,
  },
  {
    id: 62,
    img: `${womenB1}`,
    price: 229,
  },
  {
    id: 63,
    img: `${womenB1}`,
    price: 109,
  },
  {
    id: 64,
    img: `${womenB1}`,
    price: 109,
  },
  {
    id: 65,
    img: `${womenB1}`,
    price: 109,
  },
  {
    id: 66,
    img: `${womenB1}`,
    price: 109,
  },
  {
    id: 67,
    img: `${womenB1}`,
    price: 109,
  },
  {
    id: 68,
    img: `${womenB1}`,
    price: 109,
  },
  {
    id: 69,
    img: `${womenB1}`,
    price: 109,
  },
  {
    id: 70,
    img: `${womenB1}`,
    price: 109,
  },
];

const WomenBags = ({ handleAddToCart, handleAddToFavorites }) => {
  return (
    <div>
      <Header />
      <div className="items-container">
        <div className="items">
          {womensBags.map((item) => {
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

export default WomenBags;
