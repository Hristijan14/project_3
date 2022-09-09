import React from "react";
import "./MenHoodies.scss";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import menH1 from "../../assets/images/menH1.png";
import BestSellersCard from "../bestSellersCard/BestSellersCard";

const mensHoodies = [
  {
    id: 11,
    img: `${menH1}`,
    price: 79,
  },
  {
    id: 12,
    img: `${menH1}`,
    price: 129,
  },
  {
    id: 13,
    img: `${menH1}`,
    price: 200,
  },
  {
    id: 14,
    img: `${menH1}`,
    price: 229,
  },
  {
    id: 15,
    img: `${menH1}`,
    price: 109,
  },
  {
    id: 16,
    img: `${menH1}`,
    price: 109,
  },
  {
    id: 17,
    img: `${menH1}`,
    price: 109,
  },
  {
    id: 18,
    img: `${menH1}`,
    price: 109,
  },
  {
    id: 19,
    img: `${menH1}`,
    price: 109,
  },
  {
    id: 20,
    img: `${menH1}`,
    price: 109,
  },
  {
    id: 21,
    img: `${menH1}`,
    price: 109,
  },
  {
    id: 22,
    img: `${menH1}`,
    price: 109,
  },
];

const MenHoodies = ({ handleAddToCart, handleAddToFavorites }) => {
  return (
    <div>
      <Header />
      <div className="items-container">
        <div className="items">
          {mensHoodies.map((item) => {
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

export default MenHoodies;
