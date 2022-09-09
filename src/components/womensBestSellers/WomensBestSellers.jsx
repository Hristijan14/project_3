import React from "react";
import BestSellersCard from "../bestSellersCard/BestSellersCard";
import "./WomensBestSellers.scss";
import dress from "../../assets/images/Dress.png";
import pinkBlender from "../../assets/images/PinkBlender.png";
import redHeel from "../../assets/images/RedHeel.png";
import skirt from "../../assets/images/Skirt.png";
import handbag from "../../assets/images/WomensHandbag.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const womensBS = [
  {
    id: 6,
    img: `${dress}`,
    price: 79,
  },
  {
    id: 7,
    img: `${pinkBlender}`,
    price: 129,
  },
  {
    id: 8,
    img: `${redHeel}`,
    price: 200,
  },
  {
    id: 9,
    img: `${skirt}`,
    price: 229,
  },
  {
    id: 10,
    img: `${handbag}`,
    price: 109,
  },
];

const WomensBestSellers = ({ handleAddToCart, handleAddToFavorites }) => {
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
    <div className="Best-seller-container women-pb">
      <h1 className="title">Women's Best Sellers</h1>
      <Slider {...settings}>
        {womensBS.map((item) => {
          return (
            <BestSellersCard
              key={item.id}
              img={item.img}
              price={item.price}
              handleAddToCart={handleAddToCart}
              item={item}
              handleAddToFavorites={handleAddToFavorites}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default WomensBestSellers;
