import { Route, Routes } from "react-router-dom"
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css";

import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"

import Home from "./pages/home/Home"
import Shop from "./pages/shop/Shop"
import Card from "./pages/card/Card"
import Contact from "./pages/contact/Contact"
import Notfound from "./pages/notfound/Notfound"

import CartPage from "./pages/CartPage"
import Checkout from "./pages/Checkout"

import { CartProvider } from "./context/CartContext"


function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <CartProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/card/:id" element={<Card />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </CartProvider>
  );
}

export default App