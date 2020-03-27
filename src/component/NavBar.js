import React from "react";
import styled from "styled-components";
import SimpleMenu from "./SimpleMenu";

const Navbar = styled.nav`
  font-family: Avenir;
  font-size: 50px;
  font-weight: normal;
  position: absolute;
  left: 500px;
  top: 160px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavbarDiv = styled.div`
  position: relative;
  height: 457px;
  background-color: #ffffff;
  width: 100.1vw;
  @media (max-width: 768px) {
    height: 100px;
  }
`;

const Link = styled.a`
  font-size: 40px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  letter-spacing: normal;
  text-align: left;
  color: #cc0f36;
  text-decoration: none;
  padding-left: 40px;
`;

const Logo = styled.img`
  width: 25%;
  object-fit: contain;
  left: 4.1875rem;
  top: 10%;
  position: absolute;
  @media (max-width: 768px) {
    left: 70%;
  }
`;

const NavBar = () => {
  return (
    <div>
      <NavbarDiv id="#home">
        <Logo src="./Assets/next-gen-logo.jpg"></Logo>
        <Navbar>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
          <Link href="#projects">Past Project</Link>
        </Navbar>
        <SimpleMenu />
      </NavbarDiv>
    </div>
  );
};

export default NavBar;
