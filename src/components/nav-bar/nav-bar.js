import React from "react";
import { StyledBold, Logo, Navigation, StyledNav, StyledUl, StyledLi, Container} from "./nav-bar-styles";
import { HashLink as Link } from 'react-router-hash-link';

const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth"
    });    
};

const NavBar = () => {
    return (
    <Navigation>
    <Container>
        <Logo>
       <StyledBold>Paint</StyledBold>Utah<StyledBold>Curbs</StyledBold>
        </Logo>
        <StyledNav>
            <StyledUl>
         
            <Link to="/#welcome" scroll={el => scrollWithOffset(el, 150)}><StyledLi>Home</StyledLi></Link>
                <Link to="/#benefits" scroll={el => scrollWithOffset(el, 150)}><StyledLi>Benefits</StyledLi></Link>
                <Link to="/#contact" scroll={el => scrollWithOffset(el, 150)}><StyledLi>Contact</StyledLi></Link>
               
    
            </StyledUl>
         
        </StyledNav>
        </Container>
    </Navigation>
    )
}

export default NavBar;