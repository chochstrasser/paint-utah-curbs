import styled from "styled-components";

export const StyledNav = styled.nav`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100px;
  backface-visibility: hidden;
  @media only screen and (max-device-width : 1024px) {
display:none;
}

`;

export const NavList = styled.ul`
  display: flex;
  flex-flow: column wrap;
  height: 99.8vh;
  margin: 0;
  transform: translate(0, 0);
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &.active {
    transform: translate(0, 0);
  }
`;

export const NavItem = styled.li`
  flex: 1;
  position: relative;
  list-style: none;
  right: 2.5rem;
`;

export const NavLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  padding: 0 1rem;
  top: 0;
  left: 0;
  text-decoration: none;
  font-size: 24px;
  background: #ffffff;
  border-right: 1px solid #000000;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;
