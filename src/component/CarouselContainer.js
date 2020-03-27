import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ContainerDiv = styled.div`
  width: 100vw;
  height: 150vh;
  border: solid 1px #707070;
  background-color: #cc0f36;
  position: relative;
  @media (max-width: 768px) {
    height: 70vh;
  }
`;

const CarouselC = styled(Carousel)`
  width: 45vw;
  margin: 295px auto 0 auto;

  @media (max-width: 768px) {
    width: 80vw;
    margin: 250px auto;
  }
`;

const Title = styled.h1`
  font-family: GillSans;
  font-size: 50px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.16;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  position: absolute;
  top: 110px;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const CarouselContainer = () => {
  return (
    <div>
      <ContainerDiv>
        <Title id="about">Let Us Build Your NexGen Custom Home Today!</Title>
        <CarouselC autoPlay="true" infiniteLoop="true">
          <div>
            <img
              className="carouselimgs"
              alt="past housing project"
              src="./Assets/0d2e7c32-229b-40ba-8202-d46c9e82f40a.jpeg"
            />
          </div>
          <div>
            <img
              className="carouselimgs"
              alt="past housing project"
              src="./Assets/4d2b6894-5ddf-4cba-8dc5-15e2da90cebf.jpeg"
            />
          </div>
          <div>
            <img
              className="carouselimgs"
              alt="past housing project"
              src="./Assets/IMG_0940.JPG"
            />
          </div>
          <div>
            <img
              className="carouselimgs"
              alt="past housing project"
              src="./Assets/IMG_1374.JPG"
            />
          </div>
          <div>
            <img
              className="carouselimgs"
              alt="past housing project"
              src="./Assets/IMG_0593.JPG"
            />
          </div>
          <div>
            <img
              className="carouselimgs"
              alt="past housing project"
              src="./Assets/0d2e7c32-229b-40ba-8202-d46c9e82f40a.jpeg"
            />
          </div>
          <div>
            <img
              alt="past housing project"
              src="./Assets/4d2b6894-5ddf-4cba-8dc5-15e2da90cebf.jpeg"
            />
          </div>
        </CarouselC>
      </ContainerDiv>
    </div>
  );
};

export default CarouselContainer;
