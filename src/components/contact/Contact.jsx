import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./Contact.scss";
import phone from "../../assets/images/phone.png";
import mail from "../../assets/images/mail.png";
import support from "../../assets/images/support.png";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="contact-container">
        <div className="contact-items">
          <div className="section">
            <div className="imageS">
              <img src={phone} alt="phone" />
            </div>
            <p className="paraP">091-981-981</p>
          </div>
          <div className="section">
            <div className="imageS">
              <img src={mail} alt="mail" />
            </div>
            <p className="paraP">StreetStore@support.com</p>
          </div>
        </div>
        <div className="support-img">
          <img src={support} alt="support" className="imgimg" />
          <p className="paraF">We Offer 24/7-365 days Full Support !</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
