import React from "react";
import { StyledNav, NavList, NavItem, NavLink } from "./nav-styles";

const MainNav = () => {
  return (
    <StyledNav>
      <NavList>
        <NavItem>
          <NavLink href="#1">contact icon</NavLink>
        </NavItem>
      </NavList>
    </StyledNav>
  );
};

export default MainNav;
