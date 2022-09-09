import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import womenH1 from "../../assets/images/womenH1.png";
import BestSellersCard from "../bestSellersCard/BestSellersCard";

const womensHeels = [
  {
    id: 83,
    img: `${womenH1}`,
    price: 79,
  },
  {
    id: 84,
    img: `${womenH1}`,
    price: 129,
  },
  {
    id: 85,
    img: `${womenH1}`,
    price: 200,
  },
  {
    id: 86,
    img: `${womenH1}`,
    price: 229,
  },
  {
    id: 87,
    img: `${womenH1}`,
    price: 109,
  },
  {
    id: 88,
    img: `${womenH1}`,
    price: 109,
  },
  {
    id: 89,
    img: `${womenH1}`,
    price: 109,
  },
  {
    id: 90,
    img: `${womenH1}`,
    price: 109,
  },
  {
    id: 91,
    img: `${womenH1}`,
    price: 109,
  },
  {
    id: 92,
    img: `${womenH1}`,
    price: 109,
  },
  {
    id: 93,
    img: `${womenH1}`,
    price: 109,
  },
  {
    id: 94,
    img: `${womenH1}`,
    price: 109,
  },
];

const WomenHeels = ({ handleAddToCart, handleAddToFavorites }) => {
  return (
    <div>
      <Header />
      <div className="items-container">
        <div className="items">
          {womensHeels.map((item) => {
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

export default WomenHeels;
