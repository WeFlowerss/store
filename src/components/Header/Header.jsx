import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.css";
import { FaCartShopping, FaHeart } from "react-icons/fa6";

export const Header = () => {
  return (
    <div>
      <nav className={style.header}>
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">Popular</NavLink>
          <NavLink to="/">Orders</NavLink>
        </div>
        <div>
          <NavLink to="/bucket">
            <FaCartShopping />
          </NavLink>
          <NavLink to="/wishlist">
            <FaHeart />
          </NavLink>
        </div>
      </nav>
    </div>
  );
};
