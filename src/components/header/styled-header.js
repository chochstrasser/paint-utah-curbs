import styled from "styled-components";
import { isUserWhitespacable } from "@babel/types";

export const StyledHeader = styled.div`
  top: 0;
  margin-left: 100px;
  background-color: whitesmoke;
`;

export const StyledContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;
`;

export const Tel = styled.div`
  color: black;
  width: 75%;
  padding: 15px;
  font-size: 20px;
  font-weight: 900;
  text-align: right;
`;

export const Logo = styled.div`
  display: flex;
  width: 35%;
  font-size: 30px;
  font-weight: 300;
`;
