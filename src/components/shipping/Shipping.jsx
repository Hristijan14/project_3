import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./Shipping.scss";

const countryList = [
  {
    id: 1,
    country: `Austia`,
  },
  {
    id: 2,
    country: `Slovakia`,
  },
  {
    id: 3,
    country: `Russia`,
  },
  {
    id: 4,
    country: `Macedonia`,
  },
  {
    id: 5,
    country: `Ukraine`,
  },
  {
    id: 6,
    country: `USA`,
  },
  {
    id: 7,
    country: `India`,
  },
  {
    id: 8,
    country: `Albania`,
  },
  {
    id: 9,
    country: `Bulgaria`,
  },
  {
    id: 10,
    country: `Germany`,
  },
  {
    id: 11,
    country: `France`,
  },
  {
    id: 12,
    country: `Poland`,
  },
  {
    id: 13,
    country: `Serbia`,
  },
  {
    id: 14,
    country: `Greece`,
  },
  {
    id: 15,
    country: `Egypt`,
  },
  {
    id: 16,
    country: `Turkie`,
  },
  {
    id: 17,
    country: `Italy`,
  },
  {
    id: 18,
    country: `Canada`,
  },
  {
    id: 19,
    country: `China`,
  },
  {
    id: 20,
    country: `Romania`,
  },
  {
    id: 21,
    country: `Iceland`,
  },
];

const Shipping = () => {
  return (
    <div>
      <Header />
      <div className="shipping-container">
        <h1>Shipping:</h1>
        <div className="shippara">
          <p>
            The Shipping price is fixed on being 15.99€ for everyone, regardless
            of the location. Shipment is concluded in about 3-4 business days.
            The countries we ship to are listed below, for any qustions please
            head to our Contact Page.
          </p>
        </div>
        <h1>Country List:</h1>
        <div className="countryList-container">
          {countryList.map((item) => {
            return (
              <div key={item.id} className="coutryDiv">
                <p>{item.country}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shipping;
