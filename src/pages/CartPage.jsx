import React from "react";
import { useCart } from "../context/CartContext";
import { NavLink } from "react-router-dom";

function CartPage() {
  const { cart, increaseQty, decreaseQty, removeFromCart, totalPrice } = useCart();

  return (
    <div className="cart-page">
      <div className="cart-wrapper">

        {/* Header */}
        <div className="cart-header">
          <h1 className="cart-title">
            Shopping Bag
            {cart.length > 0 && (
              <span className="cart-count">({cart.length})</span>
            )}
          </h1>
        </div>

        {/* Items */}
        {cart.length === 0 ? (
          <div className="cart-empty">
            <p>Your bag is empty.</p>
            <NavLink to="/" className="cart-continue-link">Continue Shopping</NavLink>
          </div>
        ) : (
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-image">
                  <img src={item.image} alt={item.name} />
                </div>

                <div className="cart-item-details">
                  <div className="cart-item-top">
                    <h3 className="cart-item-name">{item.name}</h3>
                    <span className="cart-item-price">${item.price.toLocaleString()}</span>
                  </div>

                  <div className="cart-item-meta">
                    {item.size && (
                      <p><span>Size</span><span>{item.size}</span></p>
                    )}
                    {item.color && (
                      <p><span>Color</span><span>{item.color}</span></p>
                    )}
                    <p><span>Quantity</span><span>{item.quantity}</span></p>
                  </div>

                  <div className="cart-item-actions">
                    <div className="cart-qty">
                      <button
                        className="cart-qty-btn"
                        onClick={() => decreaseQty(item.id)}
                        aria-label="Decrease quantity"
                      >−</button>
                      <span className="cart-qty-value">{item.quantity}</span>
                      <button
                        className="cart-qty-btn"
                        onClick={() => increaseQty(item.id)}
                        aria-label="Increase quantity"
                      >+</button>
                    </div>

                    <button
                      className="cart-remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Summary */}
        {cart.length > 0 && (
          <div className="cart-summary">
            {/* Promo code */}
            <div className="cart-promo">
              <input
                type="text"
                placeholder="Promocode"
                className="cart-promo-input"
              />
              <button className="cart-promo-btn">APPLY</button>
            </div>

            <div className="cart-summary-lines">
              <div className="cart-summary-row">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="cart-summary-row">
                <span>Discount</span>
                <span>$0.00</span>
              </div>
            </div>

            <div className="cart-total-row">
              <span>Total:</span>
              <span>${Number(totalPrice).toLocaleString("en-US", { minimumFractionDigits: 2 })}</span>
            </div>

            <NavLink to="/checkout" className="cart-checkout-btn">
              Proceed to Checkout
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;