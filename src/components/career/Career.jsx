import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./Career.scss";

const Career = () => {
  return (
    <div>
      <Header />
      <div className="career-container">
        <h1>Career:</h1>
        <div className="career-section">
          <img
            src="https://www.unleash.ai/wp-content/uploads/2022/06/Amazon-1200x675.jpg"
            alt="working"
            className="career-img"
          />
          <div>
            <h3>Work With Us:</h3>
            <div className="career-para">
              <p>Team Work Oriented</p>
              <p>Passionate</p>
              <p>Hard Working</p>
              <p>Self Improvement</p>
            </div>
            <div className="career-mail">
              <input type="email" placeholder="Enter Your E-mail" />
              <button>Enter</button>
              <p>We will contact you on the E-mail you have entered </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Career;
