import styled from "styled-components";

export const Navigation = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${props => props.collapse ? "100vh" : "90px"};
  background-color: whitesmoke;
  border-bottom: 0.1px solid grey;
`;

export const Container = styled.div`
  display: flex;
  top: 0;
  flex-flow: row wrap;
  /* This aligns items to the end line on main-axis */
  align-items: baseline;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  @media only screen and (max-width: 1024px) {
    flex-flow: column-wrap;
  };
 
  
`;

export const StyledBold = styled.b`
  font-size: 30px;
  font-weight: 900;
`;

export const Logo = styled.div`
order: 1;
  font-size: 30px;
  font-weight: 300;
  margin: 0 auto;
  padding: 1.5rem 0;
  @media only screen and (max-width: 1024px) {
    flex-basis: calc(90vw - 20px);
  };
  

`;

export const StyledNav = styled.nav`

  display: flex;
  order: 2;
  margin-right: 30px;
  flex-direction: row;
  justify-content: flex-end;
  flex-grow: 2;

  @media only screen and (max-width: 1024px) {
    order: 3;
    display: ${props => props.collapse ? "block" : "none"};
    align-self: flex-end;

  };

`;

export const StyledBurger = styled.div`
  order: 3;
  display: flex;
  align-self: center;
  @media only screen and (min-width: 1025px) {
    display: none;
  };
  @media only screen and (max-width: 1024px) {
    order: 2;
  };

`;


export const StyledUl = styled.ul`

 
  `;

export const StyledLi = styled.li`
  list-style-type: none;
  display: inline-block;
  padding: 5px 7px;
  margin: 0 5px;
  color: black;
  text-transform: uppercase;

  @media only screen and (max-width: 1024px) {
    display: ${props => props.collapse ? "none" : "block"};
    width: 100%;
    text-align: center;
    padding: 10px 0px;
    font-size: 1.3rem;
    text-decoration: none;

  };


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
