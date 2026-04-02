import React from "react";
import "./support.css";

import car from "../../assets/car.svg";
import money from "../../assets/money.svg";
import lock from "../../assets/lock.svg";
import call from "../../assets/call.svg";

function Support() {
  return (
    <section className="sectionn">
      <div className="container">
        <div className="cardBoxList">
          <div className="card">
            <img src={car} alt="" />
            <h3>Free Shipping</h3>
            <p>Order above $200</p>
          </div>
          <div className="card">
            <img src={money} alt="" />
            <h3>Money-back</h3>
            <p>30 days guarantee</p>
          </div>
          <div className="card">
            <img src={lock} alt="" />
            <h3>Secure Payments</h3>
            <p>Secured by Stripe</p>
          </div>
          <div className="card">
            <img src={call} alt="" />
            <h3>24/7 Support</h3>
            <p>Phone and Email support</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Support;
