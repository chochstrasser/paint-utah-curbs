import styled from "styled-components";

export const Navigation = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: whitesmoke;
  border-bottom: 0.1px solid grey;
`;

export const Container = styled.div`
  display: flex;
  top: 0;
  flex-flow: row wrap;
  /* This aligns items to the end line on main-axis */
  align-items: baseline;
  width: 90%;
  margin: 0 auto;
`;

export const StyledBold = styled.b`
  font-size: 30px;
  font-weight: 900;
`;

export const Logo = styled.div`
  font-size: 30px;
  font-weight: 300;
  margin: 0 auto;
  padding: 1.5rem 0;
  flex: 1;
`;

export const StyledNav = styled.nav`
  flex: 2;
  display: flex;
  margin-right: 30px;
  flex-direction: row;
  justify-content: flex-end;
`;

export const StyledUl = styled.ul``;

export const StyledLi = styled.li`
  list-style-type: none;
  display: inline-block;
  padding: 5px 7px;
  margin: 0 5px;
  color: black;
  text-transform: uppercase;

  :active {
    background-color: black;
    color: white;
  }

  :focus {
    background-color: black;
    color: white;
  }
  :hover {
    background-color: black;
    color: white;
  }
`;
