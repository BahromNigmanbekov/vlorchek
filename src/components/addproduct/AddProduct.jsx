import React, { useState } from "react";
import "./AddProduct.css";

function AddProduct({ isOpen, onClose }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [description, setDescription] = useState(""); // ✅ nomni to‘g‘riladik
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !price || !imgUrl || !description) {
      return alert("Please fill all fields");
    }

    setLoading(true);

    try {
      const res = await fetch(
        "https://69cdc87a33a09f831b7c872b.mockapi.io/api/v2/product",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            price,
            description, // ✅ to‘g‘ri field
            img: [imgUrl],
          }),
        }
      );

      const data = await res.json();
      console.log(data); // 🔍 tekshirish uchun

      alert("Product added successfully!");

      // reset
      setTitle("");
      setPrice("");
      setImgUrl("");
      setDescription("");

      onClose();
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-btn" onClick={onClose}>
          &times;
        </button>

        <h2>Add New Product</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <input
            type="text"
            placeholder="Image URL"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
          />

          <button type="submit">
            {loading ? "Adding..." : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;