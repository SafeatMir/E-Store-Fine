import React from "react";
import Link from "next/link";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineShopping,
} from "react-icons/ai";

import Cart from "./Cart";
import { useStateContext } from "../context/StateContext";
import { useState } from "react";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="navbar-container">
      <div className="logo">
        <Link href="/">FINE BY MIR</Link>
      </div>
      <ul className="categories">
        <Link href="/about">
          <li className="category">About</li>
        </Link>
        <Link href="/headsets">
          <li className="category">Headsets</li>
        </Link>
        <Link href="/speakers">
          <li className="category">Speakers</li>
        </Link>
        <Link href="/watches">
          <li className="category">Watches</li>
        </Link>
      </ul>
      <div className="nav-buttons">
        <button
          type="button"
          className="cart-icon"
          onClick={() => setShowCart(true)}
        >
          <AiOutlineShopping />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>
        <div className="burger" onClick={handleNav}>
          <AiOutlineMenu />
        </div>
      </div>
      {showCart && <Cart />}
      <div className={nav ? "burger-active" : "none"}>
        <div className={nav ? "active" : "hidden"}>
          <div className="close" onClick={handleNav}>
            <AiOutlineClose />
          </div>
          <div className="nav-categories" onClick={handleNav}>
            <Link href="/">
              <li className="category">Home</li>
            </Link>
            <Link href="/about">
              <li className="category">About</li>
            </Link>
            <Link href="/headsets">
              <li className="category">Headsets</li>
            </Link>
            <Link href="/speakers">
              <li className="category">Speakers</li>
            </Link>
            <Link href="/watches">
              <li className="category">Watches</li>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
