// Card.jsx
import React, { useEffect, useState } from "react";
import "./Card.css";
import { useParams } from "react-router-dom";

function Card() {
  let { id } = useParams();

  const [data, setData] = useState(null);
  const [mainImg, setMainImg] = useState(null);

  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");

  const [quantity, setQuantity] = useState(1);

  const BOT_TOKEN = "8276293116:AAE6qc7vAvz6FXjIYKkmYl-0KLFtZ41G1wQ";
  const CHAT_ID = "6877805958";

  useEffect(() => {
    fetch(`https://69cdc87a33a09f831b7c872b.mockapi.io/api/v2/product/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setMainImg(res.img?.[0]); // ✅ birinchi rasmni oladi
      })
      .catch((err) => console.log(err));
  }, [id]);

  const sendToTelegram = () => {
    if (!name || !time || !date || !address) {
      alert("Iltimos barcha maydonlarni to‘ldiring");
      return;
    }

    const totalPrice = data.price * quantity;

    const message = `
🛒 Yangi Booking!

📦 Booking: ${data.title}
🆔 ID: ${data.id}
🔢 Booking qilingan: ${quantity} soat
💰 1 soat Booking narx: ${data.price}.000 So'm
💵 Jami Booking: ${totalPrice}.000 So'm

👤 Ism: ${name}
🕒 Vaqti: ${time}
📅 Sana: ${date}
📍 Manzil: ${address}
`;

    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
      }),
    })
      .then(() => {
        alert("Buyurtma yuborildi ✅");
        setShowForm(false);
        setName("");
        setTime("");
        setDate("");
        setAddress("");
        setQuantity(1);
      })
      .catch(() => alert("Xatolik yuz berdi ❌"));
  };

  return (
    <section className="section">
      <div className="container">
        <div className="productContainer">
          <div className="productCenter">
            <div className="leftContainer">
              <img className="productLeftImg" src={mainImg} alt={data?.title} />
            </div>

            <div className="productRightContainer">
              <h2>{data?.title}</h2>
              <p className="desc">{data?.description}</p> {/* ✅ FIX */}
              <p className="price">{data?.price}$</p>

              <div className="county">
                <div className="quantityBox">
                  <button
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  >
                    −
                  </button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>

                <button className="buyBtn" onClick={() => setShowForm(true)}>
                  Buy
                </button>
              </div>

              {showForm && (
                <div className="buyForm">
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="phone number"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                  <textarea
                    placeholder="Address \ Please enter your address correctly and do not provide false information"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  ></textarea>

                  <button onClick={sendToTelegram}>Send Message</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;