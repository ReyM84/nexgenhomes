import React from "react";
import styled from "styled-components";

const Navbar = styled.nav`
  font-family: Avenir;
  font-size: 50px;
  font-weight: normal;
  position: absolute;
  left: 500px;
  top: 160px;
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
`;

const NavBar = () => {
  return (
    <div
      style={{
        position: "relative",
        height: "457px",
        backgroundColor: "#ffffff",
        width: "100.1vw"
      }}
    >
      <Logo src="./Assets/next-gen-logo.jpg"></Logo>
      <Navbar>
        <Link href="#">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#family">Contact</Link>
        <Link href="#">Past Project</Link>
      </Navbar>
    </div>
  );
};

export default NavBar;
