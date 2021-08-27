import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components/macro";
import { menuData } from "../Data/MenuData";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import { Button } from "@material-ui/core";

const NavBar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <Nav scrollNav={scrollNav}>
      <MenuBars onClick={toggle} scrollNav={scrollNav} />
      <NavMenu>
        <NavMenuLinks>
          About <IoMdArrowDropdown />
        </NavMenuLinks>
        <NavMenuLinks>Our brands</NavMenuLinks>
        <NavMenuLinks>
          Our partners
          <IoMdArrowDropdown />
        </NavMenuLinks>
        <Company>
          <NavMenuLinks>
            Customer care <IoMdArrowDropdown />
          </NavMenuLinks>
          <NavMenuLinks>Register</NavMenuLinks>
          <Button variant="contained" style={{ background: "yellow" }}>
            Sign in
          </Button>
        </Company>
      </NavMenu>
    </Nav>
  );
};

export default NavBar;

// CSS (STYLED)

const Company = styled.div`
  display: flex;
  margin-left: 400px;
`;

const Nav = styled.nav`
  display: flex;
  position: fixed;
  background: ${({ scrollNav }) => (scrollNav ? "green" : "transparent")};
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  width: 100%;
  height: 80px;
`;

const NavLink = css`
  font-family: Poppins;
  font-weight: 300;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: ${({ scrollNav }) =>
      scrollNav ? "rgba(77, 166, 255,1)" : "rgba(0,0,0,1)"};
  }
`;

const MenuBars = styled(RiBarChartHorizontalFill)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    width: 40px;
    height: 40px;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 40%);
    &:hover {
      color: ${({ scrollNav }) =>
        scrollNav ? "rgba(77, 166, 255,1)" : "rgba(255,255,255,1)"};
    }
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-left: 250px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
`;
