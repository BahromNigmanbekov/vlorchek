// Header.jsx
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import { FaBell, FaUserAlt, FaBars, FaTimes } from 'react-icons/fa'

import { useCart } from "../../context/CartContext"
import { FaBasketShopping } from 'react-icons/fa6'


function Header() {
    const { cart } = useCart()
    const [menuOpen, setMenuOpen] = useState(false)
    const [showAddProduct, setShowAddProduct] = useState(false) // modal state

    // Modal fon bosilganda yopish uchun
    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('modal')) {
            setShowAddProduct(false)
        }
    }

    return (
        <div className="container">
            <div className="header">
                <h2 className='logo'>Velor</h2>

                <ul className={`ul-list ${menuOpen ? "active" : ""}`}>
                    <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
                    <li><NavLink to="/shop" onClick={() => setMenuOpen(false)}>Shop</NavLink></li>
                    <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
                    <li className="mobile-only">
                        <NavLink to="/notifications" onClick={() => setMenuOpen(false)}>Notifications</NavLink>
                    </li>
                    <li className="mobile-only">
                        <NavLink to="/profile" onClick={() => setMenuOpen(false)}>Profile</NavLink>
                    </li>
                    <li className="mobile-only">
                        <NavLink to="/cart" onClick={() => setMenuOpen(false)}>Cart ({cart.length})</NavLink>
                    </li>
                </ul>

                <div className="buttons">
                    <button className="btn-search"><FaBell /></button>

                    {/* User icon */}
                    <button className="btn-user" onClick={() => setShowAddProduct(true)}>
                        <FaUserAlt />
                    </button>

                    <NavLink to="/cart" className="my-basket-btn">
                        <FaBasketShopping />
                        <span className="my-cart-count">{cart.length}</span>
                    </NavLink>

                    <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                

            </div>
        </div>
    )
}

export default Header