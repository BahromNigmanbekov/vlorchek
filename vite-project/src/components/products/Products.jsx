import React, { useEffect, useState } from "react";
import ProductItem from "../productItem/ProductItem";
import "./products.css";

function Products() {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://69cdc87a33a09f831b7c872b.mockapi.io/api/v2/product")
      .then((res) => res.json())
      .then((data) => setProductsData(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;


  const getOneByType = (keyword) =>
    productsData.find((p) =>
      p.title.toLowerCase().includes(keyword)
    );

  const featuredProducts = [
    getOneByType("clock wall"),
    getOneByType("mirror wall decor"),
    getOneByType("indoor plant pot"),
    getOneByType("led table lamp"),
    getOneByType("curtain set"),
    getOneByType("photo frame"),
  ].filter(Boolean); 

  return (
    <div className="container">
      <h2 className="products-title">Featured Products</h2>

      <div className="products-grid">
        {featuredProducts.map((product, index) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.img?.[0]}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
