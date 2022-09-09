import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import menS1 from "../../assets/images/menS1.png";
import BestSellersCard from "../bestSellersCard/BestSellersCard";

const mensShoes = [
  {
    id: 35,
    img: `${menS1}`,
    price: 79,
  },
  {
    id: 36,
    img: `${menS1}`,
    price: 129,
  },
  {
    id: 37,
    img: `${menS1}`,
    price: 200,
  },
  {
    id: 38,
    img: `${menS1}`,
    price: 229,
  },
  {
    id: 39,
    img: `${menS1}`,
    price: 109,
  },
  {
    id: 40,
    img: `${menS1}`,
    price: 109,
  },
  {
    id: 41,
    img: `${menS1}`,
    price: 109,
  },
  {
    id: 42,
    img: `${menS1}`,
    price: 109,
  },
  {
    id: 43,
    img: `${menS1}`,
    price: 109,
  },
  {
    id: 44,
    img: `${menS1}`,
    price: 109,
  },
  {
    id: 45,
    img: `${menS1}`,
    price: 109,
  },
  {
    id: 46,
    img: `${menS1}`,
    price: 109,
  },
];

const MenShoes = ({ handleAddToCart, handleAddToFavorites }) => {
  return (
    <div>
      <Header />
      <div className="items-container">
        <div className="items">
          {mensShoes.map((item) => {
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

export default MenShoes;
