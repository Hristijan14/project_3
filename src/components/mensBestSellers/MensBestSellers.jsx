import React from "react";
import BestSellersCard from "../bestSellersCard/BestSellersCard";
import "./MensBestSellers.scss";
import dressShirt from "../../assets/images/DressShirt.png";
import jumper from "../../assets/images/Jumper.png";
import pants from "../../assets/images/Pants.png";
import Jacket from "../../assets/images/Jacket.png";
import whiteSneakers from "../../assets/images/WhiteSneakers.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const mensBS = [
  {
    id: 1,
    img: `${dressShirt}`,
    price: 79,
  },
  {
    id: 2,
    img: `${jumper}`,
    price: 129,
  },
  {
    id: 3,
    img: `${pants}`,
    price: 200,
  },
  {
    id: 4,
    img: `${Jacket}`,
    price: 229,
  },
  {
    id: 5,
    img: `${whiteSneakers}`,
    price: 109,
  },
];

const MensBestSellers = ({ handleAddToCart, handleAddToFavorites }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="Best-seller-container">
      <h1 className="title">Men's Best Sellers</h1>
      <Slider {...settings}>
        {mensBS.map((item) => {
          return (
            <BestSellersCard
              key={item.id}
              img={item.img}
              price={item.price}
              item={item}
              handleAddToCart={handleAddToCart}
              handleAddToFavorites={handleAddToFavorites}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default MensBestSellers;
