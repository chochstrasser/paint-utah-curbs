import styled from "styled-components";

export const StyledBenefits = styled.div`
  padding: 50px 10px 50px 10px;
  background-color: whitesmoke;
  @media only screen and (max-device-width : 1024px) {
    margin-left: 0px;
    padding: 0 10px;
}
`;
export const StyledContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  flex-wrap: wrap;
`;

export const StyledImg = styled.img`
  height: 500px;
  order: 2;
  @media only screen and (max-device-width : 1024px){
  order: 2;
  padding-top: 30px;
  height: 400px;
  padding-bottom: 20px;

}

`;

export const StyledText = styled.div`
  width: 50%;
  order: 1;
  padding-right: 50px;
  @media only screen and (max-device-width : 1024px){
  order: 1;
  width: 100%;
  padding-right: 0px;
}

`;

export const StyledBenefitH1 = styled.h1`
  font-weight: bold; /* set a bold font */
`;

export const StyledBenefitText = styled.div`
  line-height: 1.5;
  font-size: 20px;
  font-weight: 400;
  text-align: left;

`;

export const StyledBenefit = styled.p`
  list-style-type: none;
  font-size: 18px;
`;

export const StyledBold = styled.b`
  font-size: 20px;
  font-weight: bold;
`;
