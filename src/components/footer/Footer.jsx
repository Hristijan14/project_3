import React from "react";
import "./Footer.scss";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import mail from "../../assets/images/mail.png";
import instagram from "../../assets/images/instagram.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <img src={facebook} alt="facebook" />
      <img src={instagram} alt="instagram" />
      <img src={twitter} alt="twitter" />
      <img src={mail} alt="mail" />
    </div>
  );
};

export default Footer;
