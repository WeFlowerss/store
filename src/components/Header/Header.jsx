import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import style from "./Header.module.css";

const StyledLink = styled(NavLink)`
  &.active {
    border-bottom: 1px solid white;
  }
`;

export const Header = () => {
  return (
    <nav className={style.header}>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/bucket">Bucket</StyledLink>
      <StyledLink to="/wishlist">WishList</StyledLink>
    </nav>
  );
};
