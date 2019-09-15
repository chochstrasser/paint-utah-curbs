import styled from "styled-components";

export const StyledWelcome = styled.div`
  padding: 0px 10px 50px 10px;
  @media only screen and (max-device-width : 1024px) {
    padding: 0 10px;
    margin: 0 auto;
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
  height: 400px;
  order: 1;
  @media only screen and (max-device-width : 1024px){
  order: 2;
  padding-top: 30px;
  padding-bottom: 20px;
}

`;

export const StyledText = styled.div`
  width: 50%;
  padding-left: 50px;
  order: 2;
  @media only screen and (max-device-width : 1024px) {
  order: 1;
  width: 100%;
  padding-left: 0px;
}

`;

export const StyledWelcomeH1 = styled.h1`
  font-weight: bold; /* set a bold font */
`;

export const StyledWelcomeText = styled.div`
  line-height: 1.5;
  font-size: 24px;
  font-weight: 400;
  text-align: left;
  @media only screen and (max-device-width : 1024px) {
    font-size: 20px;
}
`;

