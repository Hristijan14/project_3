import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import MensBestSellers from "../mensBestSellers/MensBestSellers";
import WomensBestSellers from "../womensBestSellers/WomensBestSellers";

const HomePage = ({ handleAddToCart, handleAddToFavorites }) => {
  return (
    <div>
      <Header />
      <MensBestSellers
        handleAddToCart={handleAddToCart}
        handleAddToFavorites={handleAddToFavorites}
      />
      <WomensBestSellers
        handleAddToCart={handleAddToCart}
        handleAddToFavorites={handleAddToFavorites}
      />
      <Footer />
    </div>
  );
};

export default HomePage;
