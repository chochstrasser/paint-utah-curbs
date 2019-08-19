import React from "react";
import { StyledHeader, StyledContainer, Logo } from "./styled-header";
const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <Logo>
          <b>Paint</b>Utah<b>Curbs</b>
        </Logo>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
