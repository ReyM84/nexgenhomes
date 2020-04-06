import React from "react";
import styled from "styled-components";
import SimpleMenu from "./SimpleMenu";
import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const Navbar = styled.nav`
  font-family: Avenir;
  font-size: 3.125rem;
  font-weight: normal;
  position: absolute;
  left: 31.25rem;
  top: 10rem;
  @media (max-width: 575.98px) {
    display: none;
  }
  @media (max-width: 767.98px) and (min-width: 576px) {
    left: 1px;
    top: 200px;
  }
  @media (max-width: 991.98px) and (min-width: 768px) {
    left: 30%;
    top: 30%;
  }
`;

const NavbarDiv = styled.div`
  position: relative;
  height: 28.5625rem;
  background-color: #ffffff;
  width: 100.1vw;
  @media (max-width: 575.98px) {
    height: 6.25rem;
  }
  @media (max-width: 767.98px) and (min-width: 576px) {
    height: 100vh;
  }
  @media (max-width: 991.98px) and (min-width: 768px) {
    height: 20vh;
  }
`;

const Link = styled.a`
  font-size: 2.5rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  letter-spacing: normal;
  text-align: left;
  color: #cc0f36;
  text-decoration: none;
  padding-left: 2.5rem;
  @media (max-width: 767.98px) and (min-width: 576px) {
    font-size: 2rem;
  }
  @media (max-width: 991.98px) and (min-width: 768px) {
    font-size: 22px;
  }
`;

const Logo = styled.img`
  width: 25%;
  object-fit: contain;
  left: 4.1875rem;
  top: 10%;
  position: absolute;
  @media (max-width: 575.98px) {
    left: 70%;
  }
  @media (max-width: 767.98px) and (min-width: 576px) {
    left: 60%;
    top: -0.6875rem;
    width: 40%;
    t
  }
  @media (max-width: 991.98px) and (min-width: 768px) {
    left: 1%;
    top: 15%;
  }
`;

const Contact = styled.div`
  font-family: Avenir;
  font-size: 1.25rem;
  font-weight: normal;
  position: absolute;
  right: 5%;
  top: 5%;
  @media (max-width: 575.98px) {
    font-size: 15px;
    left: 13%;
    top: 25%;
  }
`;

const Email = styled.a`
  text-decoration: none;
  color: #27265e;
  margin-left: 1rem;
  @media (max-width: 575.98px) {
    display: block;
    font-size: 12px;
  }
`;

const Number = styled.a`
  text-decoration: none;
  color: #27265e;
  @media (max-width: 575.98px) {
    display: block;
    padding-left: 16px;
  }
`;

const NavBar = () => {
  return (
    <div>
      <NavbarDiv id="#home">
        <Logo src="./Assets/next-gen-logo.jpg"></Logo>
        <Contact>
          <Number href="tel:830-837-1228">
            <PhoneIcon /> 830-837-1228
          </Number>
          <Email href="mailto:nexgencustomhomes@gmail.com">
            <MailOutlineIcon /> Nextgencustomhomes@gmail.com
          </Email>
        </Contact>
        <Navbar>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
          <Link className="pp" href="#projects">
            Past Project
          </Link>
        </Navbar>
        <SimpleMenu />
      </NavbarDiv>
    </div>
  );
};

export default NavBar;
