import React from "react";
import { StyledNav, NavList, NavItem, NavLink } from "./nav-styles";

const MainNav = () => {
  return (
    <StyledNav>
      <NavList>
      <NavItem>
          <NavLink href="#1">home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#2">benefits</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#3">contact</NavLink>
        </NavItem>
      </NavList>
    </StyledNav>
  );
};

export default MainNav;
