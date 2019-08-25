import styled from "styled-components";

export const StyledNav = styled.nav`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100px;
  backface-visibility: hidden;
  border-right: 1px solid #000000;
  @media only screen and (max-device-width : 1024px) {
display:none;
}

`;

export const NavList = styled.ul`
  height: 99.8vh;
  margin: 0;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  transform: translate(0, 0);
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &.active {
    transform: translate(0, 0);
  }
`;

export const NavItem = styled.li`
  position: relative;
  list-style: none;
  right: 2.5rem;
  padding: 5px 0;


`;

export const NavLink = styled.a`
  
  height: 100%;
  padding: 0 0.8rem;
  top: 0;
  left: 0;
  text-decoration: none;
  font-size: 21px;
  background: #ffffff;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  color: black;
`;
