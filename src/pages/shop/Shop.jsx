// Shop.jsx
import React, { useState } from 'react';
import More from '../../components/more/More';
import "./Shop.css";
import AddProduct from '../../components/addproduct/AddProduct';
import { FaSearch } from 'react-icons/fa';

function Shop() {
  const [search, setSearch] = useState(""); // search state
  const [isModalOpen, setIsModalOpen] = useState(false); // modal state

  return (
    <div className="shop-page">
      {/* Header / ShopBox */}
      <div className="shopBox">
        <div className="bari">
          <h2 className="shopPage">Shop Page</h2>
        <p className="miniShopPage">Design the place you always imagined.</p>
        <button 
          className="shopPageBtn"
          onClick={() => setIsModalOpen(true)}
        >
          Add Product
        </button>
        </div>
      </div>

      {/* Main content */}
      <div className="container">
        <More search={search} />
      </div>

      {/* Sticky search input at the bottom */}
      <div className="sticky-search-bottom">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="shopSearchInput"
        />
        <FaSearch  className='search-btn' />
      </div>

      {/* AddProduct Modal */}
      <AddProduct
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}

export default Shop;