import React from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Productitem.css";

function ProductItem({ id, image, price, title, index }) {
  const { addToCart } = useCart();

  const animations = ["fade-up-right", "fade-up-left"];
  const chosenAnimation = animations[index % animations.length];

  const product = { id, name: title, price, image };

  return (
    <div className="product-card" data-aos={chosenAnimation}>
      <NavLink to={`/card/${id}`} className="product-link">
        <div className="product-image-box">
          <img src={image} alt={title} />
        </div>
        <h3 className="product-title">{title}</h3>
        <p className="product-price">{price}.000 so'm</p>
      </NavLink>

      <button
        className="my-add-cart-btn"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductItem;