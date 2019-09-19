import React from "react";
import {
  StyledBenefits,
  StyledContainer,
  StyledImg,
  StyledBenefitH1,
  StyledBenefitText,
  StyledText,
  StyledBenefit,
  StyledBold
} from "./benefits-styles";

const Benefits = () => {
  return (
    <StyledBenefits  id="benefits">
      <StyledContainer>
        <StyledImg src="https://s3-us-west-2.amazonaws.com/www.paintutahcurbs.com/237.jpg" />
        <StyledText>
          <StyledBenefitH1>Benefits</StyledBenefitH1>
          <StyledBenefitText>
            <StyledBenefit>
              <StyledBold>Large Visible Address Numbers</StyledBold>
              <br />
              Your beautiful new curb addresses will consist of professionally
              painted large 4” Black Numbers on a White or black Background. You
              also have the choice of choosing a design like the Texas Flag Curb
              Painting.
            </StyledBenefit>

            <StyledBenefit>
              <StyledBold>Excellent Quality</StyledBold>
              <br />
              We use only high quality paint that provides superior coverage and
              durability on curb paintings that can be specifically treated with
              reflective glass beads and a protective coating should you want
              night time visibility.
            </StyledBenefit>

            <StyledBenefit>
              <StyledBold>Most Trust</StyledBold>
              <br />
              This curbside address painting system is very attractive,
              extremely durable, and will last for many years.
            </StyledBenefit>
          </StyledBenefitText>
        </StyledText>
      </StyledContainer>
    </StyledBenefits>
  );
};

export default Benefits;
