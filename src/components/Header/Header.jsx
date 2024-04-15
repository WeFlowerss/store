import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.css";
import styled from "styled-components";
import { FaCartShopping, FaHeart } from "react-icons/fa6";

const StyledLink = styled(NavLink)`
  &.active {
    border-bottom: 1px solid white;
  }
`;

export const Header = () => {
  return (
    <div>
      <nav className={style.header}>
        <div>
          <StyledLink to="/">Home</StyledLink>
          {/* <StyledLink to="/popular">Popular</StyledLink> */}
          {/* <StyledLink to="/orders">Orders</StyledLink> */}
        </div>
        <div></div>
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
