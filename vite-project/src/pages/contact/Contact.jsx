import React, { useState } from "react";
import { BiStore } from "react-icons/bi";
import "./Contact.css";
import { LuPhone } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import soft from "../../assets/tim.jpg"
import AboutUs from "../../components/aboutus/AboutUs";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");

  const BOT_TOKEN = "8631821744:AAGuAj4DNkywbd4V2Ax3UvRHAm3qUP9WSgM";
  const CHAT_ID = "6877805958";

  const handleSubmit = (e) => {
    e.preventDefault();

    let text = "Foydalanuvchidan Xabar: %0A%0A";
    text += `Ismi: ${name}%0A`;
    text += `Email Addresi: ${email}%0A`;
    text += `Telefon Nomeri: ${number}%0A`;
    text += `Xabari: ${message}%0A`;

    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    setEmail("");
    setMessage("");
    setName("");
    setNumber("");
  };

  return (
    <div className="container">
      <div className="contactSectionBox">
        <div className="sl">
            <h2 data-aos="zoom-in-down" className="contactUsBigText">
            We believe in sustainable <br /> decor. We’re passionate about <br /> life at home.
          </h2>

          <p>Our features timeless furniture, with natural fabrics, curved lines, plenty of mirrors and classic design,  <br /> can be incorporated into any decor project. The pieces enchant for their sobriety, to last for generations, <br /> faithful to the shapes of each period, with a touch of the present</p>
        </div>

        <AboutUs/>
        <div className="sectionTop">
          <div className="sectionTopCarsList">
            <div className="sectionTopCartItem">
              <BiStore className="sectionTopCartItemImgs" />
              <h3>ADDRESS</h3>
              <p>O'zbekistan</p>
            </div>
            <div className="sectionTopCartItem">
              <LuPhone className="sectionTopCartItemImgs" />
              <h3>CONTACT US</h3>
              <p>+998 90 114 71 70</p>
            </div>
            <div className="sectionTopCartItem">
              <HiOutlineMail className="sectionTopCartItemImgs" />
              <h3>EMAIL</h3>
              <p>vlor@gmail.com </p>
            </div>
          </div>
        </div>
        <div className="sectionBottom">
          <form onSubmit={handleSubmit} action="" className="sectionBottomForm">
            <div className="sectionFormContentsBox">
              <h3>FULL NAME</h3>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="sectionFormContentsBox">
              <h3>EMAIL ADDRESS</h3>
              <input
                type="text"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="sectionFormContentsBox">
              <h3>PHONE NUMBER</h3>
              <input
                type="text"
                placeholder="Your Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="sectionFormContentsBox">
              <h3>MESSAGE</h3>
              <textarea
                rows={5}
                name=""
                id=""
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button className="sectionBottomBtn">Send Message</button>
          </form>
          <div className="salom">
            <img src={soft} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
