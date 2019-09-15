import React from "react";
import { StyledBold, Logo, Navigation, StyledNav, StyledUl, StyledLi} from "./nav-bar-styles";
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
    <Navigation>
        <Logo>
       <StyledBold>Paint</StyledBold>Utah<StyledBold>Curbs</StyledBold>
        </Logo>
        <StyledNav>
            <StyledUl>
         
            <StyledLi><Link to="/">Home</Link></StyledLi>
                <StyledLi><Link to="/benefits">Benefits</Link></StyledLi>
                <StyledLi><Link to="/contact">Contact</Link></StyledLi>
               
    
            </StyledUl>
         
        </StyledNav>
    </Navigation>
    )
}

export default NavBar;