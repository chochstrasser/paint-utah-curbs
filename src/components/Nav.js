import React from "react";
import { StyledNav, Burger, BurgerPatty, NavList, NavItem, NavLink } from "nav-styles";

const Nav = () => {
  return (
    <StyledNav>
      <Burger>
        <BurgerPatty />
      </Burger>
      <NavList>
        <NavItem>
          <NavLink href="#1">contact</NavLink>
        </NavItem>
      </NavList>
    </StyledNav>
  );
};

export default Nav;
