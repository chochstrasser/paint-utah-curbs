import React from "react";
import styled from "styled-components";

const StyledWelcome = styled.div`
  margin-left: 100px;
  padding: 50px 10px 50px 10px;
`;
const StyledContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 400px;
`;

const StyledImg = styled.img`
  height: 100%;
`;

const StyledText = styled.div`
  width: 50%;
  padding-left: 50px;
`;

const StyledWelcomeH1 = styled.h1`
  font-weight: bold; /* set a bold font */
`;

const StyledWelcomeText = styled.div`
  line-height: 1.5;
  font-size: 24px;
  font-weight: 400;
  text-align: left;
`;

const Welcome = () => {
  return (
    <StyledWelcome>
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
