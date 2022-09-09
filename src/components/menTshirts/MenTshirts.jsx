import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import menT1 from "../../assets/images/menT1.png";
import BestSellersCard from "../bestSellersCard/BestSellersCard";

const mensTshirts = [
  {
    id: 47,
    img: `${menT1}`,
    price: 79,
  },
  {
    id: 48,
    img: `${menT1}`,
    price: 129,
  },
  {
    id: 49,
    img: `${menT1}`,
    price: 200,
  },
  {
    id: 50,
    img: `${menT1}`,
    price: 229,
  },
  {
    id: 51,
    img: `${menT1}`,
    price: 109,
  },
  {
    id: 52,
    img: `${menT1}`,
    price: 109,
  },
  {
    id: 53,
    img: `${menT1}`,
    price: 109,
  },
  {
    id: 54,
    img: `${menT1}`,
    price: 109,
  },
  {
    id: 55,
    img: `${menT1}`,
    price: 109,
  },
  {
    id: 56,
    img: `${menT1}`,
    price: 109,
  },
  {
    id: 57,
    img: `${menT1}`,
    price: 109,
  },
  {
    id: 58,
    img: `${menT1}`,
    price: 109,
  },
];

const MenTshirts = ({ handleAddToCart, handleAddToFavorites }) => {
  return (
    <div>
      <Header />
      <div className="items-container">
        <div className="items">
          {mensTshirts.map((item) => {
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

export default MenTshirts;
