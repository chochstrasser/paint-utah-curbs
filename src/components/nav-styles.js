import styled from "styled-components";

export const StyledNav = styled.nav`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100px;
  backface-visibility: hidden;
`;

export const Burger = styled.div`
  height: 15vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  background: #2b3033;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

export const BurgerPatty = styled.div`
  position: relative;
  height: 2px;
  width: 40px;
  background: white;
  will-change: transform;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:before,
  &:after {
    will-change: transform;
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  &:before {
    content: "";
    position: absolute;
    top: -10px;
    left: 0;
    height: 2px;
    width: 100%;
    background: white;
  }

  &:after {
    content: "";
    position: absolute;
    top: 10px;
    left: 0;
    height: 2px;
    width: 100%;
    background: white;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-flow: column wrap;
  height: 85vh;
  transform: translate(0, -100%);
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &.active {
    transform: translate(0, 0);
  }
`;

export const NavItem = styled.li`
  flex: 1;
  position: relative;
`;

export const NavLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  text-decoration: none;
  font-size: 24px;
  background: #2b3033;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;
