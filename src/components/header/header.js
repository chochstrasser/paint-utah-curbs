import React from "react";
import { StyledHeader, StyledContainer, Tel, Logo } from "./styled-header";
const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <Logo>
          <b>Paint</b>Utah<b>Curbs</b>
        </Logo>
        <Tel>TEL: +1(435)-32332-34</Tel>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
