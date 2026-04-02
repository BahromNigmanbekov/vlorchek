import React, { useState } from "react";
import { useCart } from "../context/CartContext";


function Checkout() {
  const { cart, totalPrice, clearCart } = useCart();
  const [sending, setSending] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const sendTelegramMessage = async () => {
    if (sending) return;
    setSending(true);

    const botToken = "8630280247:AAGEQhL4Lrcz0yGuHZXyidmF8rrPW_vhd3s";
    const chatId = "8398715237";

    let message = "✅ New Order!\n\n";
    cart.forEach((item) => {
      message += `${item.name} — ${item.quantity} × $${item.price}\n`;
    });
    message += `\nTotal: $${totalPrice}`;

    try {
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text: message }),
      });
    } catch (error) {
      console.error("❌ Telegram message failed:", error);
    } finally {
      setSending(false);
      clearCart();
      setConfirmed(true);
    }
  };

  if (confirmed) {
    return (
      <div className="checkout-page">
        <div className="checkout-confirmed">
          <div className="checkout-confirmed-icon">✓</div>
          <h2>Order Confirmed</h2>
          <p>Your order has been received. We'll be in touch shortly.</p>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="checkout-page">
        <div className="checkout-empty">
          <p>Your bag is empty.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-wrapper">

        {/* Header */}
        <div className="checkout-header">
          <h1 className="checkout-title">Checkout</h1>
        </div>

        {/* Order Summary */}
        <div className="checkout-section">
          <p className="checkout-section-label">Order Summary</p>

          <div className="checkout-items">
            {cart.map((item) => (
              <div key={item.id} className="checkout-item">
                <div className="checkout-item-left">
                  {item.image && (
                    <div className="checkout-item-thumb">
                      <img src={item.image} alt={item.name} />
                    </div>
                  )}
                  <div className="checkout-item-info">
                    <span className="checkout-item-name">{item.name}</span>
                    <span className="checkout-item-qty">Qty: {item.quantity}</span>
                  </div>
                </div>
                <span className="checkout-item-price">
                  ${(item.price * item.quantity).toLocaleString("en-US", { minimumFractionDigits: 2 })}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Totals */}
        <div className="checkout-totals">
          <div className="checkout-totals-row">
            <span>Subtotal</span>
            <span>${Number(totalPrice).toLocaleString("en-US", { minimumFractionDigits: 2 })}</span>
          </div>
          <div className="checkout-totals-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="checkout-totals-row checkout-totals-total">
            <span>Total</span>
            <span>${Number(totalPrice).toLocaleString("en-US", { minimumFractionDigits: 2 })}</span>
          </div>
        </div>

        {/* Confirm */}
        <button
          className={`checkout-confirm-btn ${sending ? "checkout-confirm-btn--loading" : ""}`}
          onClick={sendTelegramMessage}
          disabled={sending}
        >
          {sending ? "Placing Order…" : "Confirm Order"}
        </button>

        <p className="checkout-note">
          By confirming, you agree to our terms of service.
        </p>
      </div>
    </div>
  );
}

export default Checkout;