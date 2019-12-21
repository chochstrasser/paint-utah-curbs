import React from "react";
import { StyledBold, Logo, Navigation, StyledNav, StyledLink, StyledUl, StyledLi, Container, StyledBurger } from "./nav-bar-styles";
import HamburgerMenu from "./burger-icon";
import useBurgerMenu from "./useBurgerMenu";

const scrollWithOffset = (el, offset) => {
  const elementPosition = el.offsetTop - offset;
  window.scroll({
    top: elementPosition,
    left: 0,
    behavior: "smooth"
  });
};

const NavBar = () => {
  const { handleClick, isOpen, handleSelect } = useBurgerMenu(false, false);

  return (
    <Navigation collapse={isOpen}>
      <Container>
        <Logo>
          <StyledBold>Paint</StyledBold>Utah<StyledBold>Curbs</StyledBold>
        </Logo>
        <StyledNav collapse={isOpen}>
          <StyledUl>
            <StyledLink to="/#welcome" scroll={el => scrollWithOffset(el, 50)}>
              <StyledLi onClick={handleSelect}>Home</StyledLi>
            </StyledLink>
            <StyledLink to="/#benefits" scroll={el => scrollWithOffset(el, 50)}>
              <StyledLi onClick={handleSelect}>Benefits</StyledLi>
            </StyledLink>
            <StyledLink to="/#contact" scroll={el => scrollWithOffset(el, 50)}>
              <StyledLi onClick={handleSelect}>Contact</StyledLi>
            </StyledLink>
          </StyledUl>
        </StyledNav>
        <StyledBurger>
          <HamburgerMenu
            isOpen={isOpen}
            menuClicked={handleClick}
            width={20}
            height={14}
            strokeWidth={3}
            rotate={0}
            color="black"
            borderRadius={0}
            animationDuration={0.5}
          />
        </StyledBurger>
      </Container>
    </Navigation>
  );
};

export default NavBar;
