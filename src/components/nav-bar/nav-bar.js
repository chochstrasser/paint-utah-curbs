import React from "react";
import { StyledBold, Logo, Navigation, StyledNav, StyledUl, StyledLi, Container } from "./nav-bar-styles";
import { HashLink as Link } from "react-router-hash-link";

const NavBar = () => {
  return (
    <Navigation>
      <Container>
        <Logo>
          <StyledBold>Paint</StyledBold>Utah<StyledBold>Curbs</StyledBold>
        </Logo>
        <StyledNav>
          <StyledUl>
            <Link smooth to="/#welcome">
              <StyledLi>Home</StyledLi>
            </Link>
            <Link smooth to="/#benefits">
              <StyledLi>Benefits</StyledLi>
            </Link>
            <Link smooth to="/#contact">
              <StyledLi>Contact</StyledLi>
            </Link>
          </StyledUl>
        </StyledNav>
      </Container>
    </Navigation>
  );
};

export default NavBar;
