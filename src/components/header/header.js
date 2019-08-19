import React from "react";
import {
  StyledHeader,
  StyledContainer,
  Logo,
  StyledBold
} from "./styled-header";
const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <Logo>
          <StyledBold>Paint</StyledBold>Utah<StyledBold>Curbs</StyledBold>
        </Logo>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
