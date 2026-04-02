import React from "react";
import "./newArrivals.css";
import Products from "../../components/products/Products";

import { FaArrowRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function NewArrivals() {
  return (
    <section className="section">
      <div className="container">
        <div className="topBox">
          <h2 className="topText">
            New <br />
            Arrivals
          </h2>

          <button className="topBtn">
            <NavLink to={"/shop"}>
              More Products <FaArrowRight />
            </NavLink>
          </button>
        </div>

        <Products />
      </div>
    </section>
  );
}

export default NewArrivals;
