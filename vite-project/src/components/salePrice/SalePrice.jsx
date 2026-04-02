import React from "react";
import "./salePrice.css";

import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import fet from "../../assets/tim.jpg";
function SalePrice() {
  return (
    <section>
      <div className="saleBoxList grayy">
        <img className="imge" src={fet} alt="" />
        <div className="text">
          <span>SALE UP TO 35% OFF</span>
          <h2>HUNDREDS of <br />
            New lower prices!</h2>
          <p> It’s more affordable than ever to give every room in your home a stylish makeover </p>

          <button>
            <NavLink to={"/shop"}>
              Shop Now <FaArrowRight />
            </NavLink>
          </button>
        </div>
      </div>
    </section>
  );
}

export default SalePrice;
