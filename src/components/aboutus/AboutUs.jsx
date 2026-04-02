
import "./AboutUs.css";

import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import fet from "../../assets/tim.jpg";
function AboutUs() {
  return (
    <section>
      <div className="saleBoxList grayy">
        <img className="imge" src={fet} alt="" />
        <div className="text">
          <h2>About Us<br /></h2>
          <p> Velor is a gift & decorations store based in HCMC, Vietnam. Est since 2019. 
Our customer service is always prepared to support you 24/7</p>

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

export default AboutUs;
