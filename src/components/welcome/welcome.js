import React from "react";
import {
  StyledWelcome,
  StyledContainer,
  StyledImg,
  StyledWelcomeH1,
  StyledWelcomeText,
  StyledText,
  StyledBold,
  Logo
} from "./welcome-styles";

const Welcome = () => {
  return (
    <StyledWelcome>
      <Logo>
        <StyledBold>Paint</StyledBold>Utah<StyledBold>Curbs</StyledBold>
      </Logo>
      <StyledContainer>
        <StyledImg src="https://s3-us-west-2.amazonaws.com/www.paintutahcurbs.com/54.jpg" />
        <StyledText>
          <StyledWelcomeH1>Welcome</StyledWelcomeH1>
          <StyledWelcomeText>
            Having your curb address painting be clearly visible helps Police,
            Fire, Ambulance Services & other Guests find your home, especially
            at night when addresses can be hard to find. Statistics show that
            78% of homes are inadequately numbered for night use, and that's
            when these numbers really stand out.
          </StyledWelcomeText>
        </StyledText>
      </StyledContainer>
    </StyledWelcome>
  );
};

export default Welcome;
