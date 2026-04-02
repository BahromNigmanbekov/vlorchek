import React, { useEffect, useState } from "react";
import ProductItem from "../productItem/ProductItem";


function More({ search }) {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://69cdc87a33a09f831b7c872b.mockapi.io/api/v2/product")
      .then((res) => res.json())
      .then((data) => setProductsData(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;

  // Search bilan filter
  const filteredProducts = productsData.filter((product) =>
    product.title.toLowerCase().includes(search?.toLowerCase() || "")
  );

  return (
    <div className="container">
      <h2 className="products-title">Featured Products</h2>

      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.img?.[0]}
              index={index}
            />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
}

export default More;