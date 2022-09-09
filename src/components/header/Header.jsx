import React from "react";
import "./Header.scss";
import favorites from "../../assets/images/favorites.png";
import shopCart from "../../assets/images/shoppingCart.png";
import logo from "../../assets/images/logo.png";
import sideMenu from "../../assets/images/sideBar.png";
import closeMenu from "../../assets/images/close.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [sideBar, setSideBar] = useState(false);
  const [mens, setMens] = useState(false);
  const [womens, setWomens] = useState(false);

  const showSideBar = () => {
    setSideBar(!sideBar);
  };

  const showMens = () => {
    setMens(!mens);
  };

  const showWomens = () => {
    setWomens(!womens);
  };

  return (
    <>
      <div className="header-container">
        <div>
          <Link to="/">
            <img src={logo} alt="logo" className="logo-img" />
          </Link>
        </div>
        <div>
          <Link to="/favorites">
            <img src={favorites} alt="favorites" className="favMargin" />
          </Link>
          <Link to="/shopping-cart">
            <img src={shopCart} alt="cart" />
          </Link>
        </div>
        <div>
          <img
            src={sideBar ? closeMenu : sideMenu}
            alt="sidebar"
            className="favMargin sb"
            onClick={showSideBar}
          />
        </div>
      </div>
      <div className="thesidebar">
        {sideBar && (
          <div className="sideBar-container">
            <p onClick={showMens} className="hover">
              Man's ↓
            </p>
            {mens && (
              <div className="additionalBar">
                <Link to="/mens/hoodies" className="link">
                  <p>Hoodies</p>
                </Link>
                <Link to="/mens/shoes" className="link">
                  <p>Shoes</p>
                </Link>
                <Link to="/mens/jeans" className="link">
                  <p>Jeans</p>
                </Link>
                <Link to="/mens/tshirts" className="link">
                  <p>T-Shirts</p>
                </Link>
              </div>
            )}
            <p onClick={showWomens} className="hover">
              Women's ↓
            </p>
            {womens && (
              <div className="additionalBar">
                <Link to="/womens/bags" className="link">
                  <p>Bags</p>
                </Link>
                <Link to="/womens/dresses" className="link">
                  <p>Dresses</p>
                </Link>
                <Link to="/womens/heels" className="link">
                  <p>Heels</p>
                </Link>
                <Link to="/womens/makeup" className="link">
                  <p>Make-up</p>
                </Link>
              </div>
            )}
            <Link to="/contact" className="link">
              <p>Contact</p>
            </Link>
            <Link to="/shipping" className="link">
              <p>Shipping</p>
            </Link>
            <Link to="/aboutus" className="link">
              <p>About Us</p>
            </Link>
            <Link to="/career" className="link">
              <p className="para">Career</p>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
