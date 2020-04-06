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
  @media (max-width: 767.98px) and (min-width: 576px) {
    height: 110vh;
  }
  @media (max-width: 991.98px) and (min-width: 768px) {
    left: 1%;
    top: 15%;
    height: 110vh;
    left: 0px;
  }
`;

const CarouselC = styled(Carousel)`
  width: 45vw;
  margin: 295px auto 0 auto;

  @media (max-width: 575.98px) {
    width: 80vw;
    margin: 250px auto;
  }
  @media (max-width: 767.98px) and (min-width: 576px) {
    width: 42vw;
    margin: 110px auto;
  }
  @media (max-width: 991.98px) and (min-width: 768px) {
    margin-top: 35vh;
    width: 60vw;
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

  @media (max-width: 575.98px) {
    font-size: 30px;
  }
  @media (max-width: 767.98px) and (min-width: 576px) {
    font-size: 35px;
    top: 30px;
  }

  @media (max-width: 991.98px) and (min-width: 768px) {
    font-size: 35px;
    padding-top: 80px;
    top: 10%;
  }
`;

const CarouselContainer = () => {
  return (
    <div>
      <ContainerDiv>
        <Title id="about">Let Us Build Your NexGen Custom Home Today!</Title>
        <CarouselC autoPlay="true" infiniteLoop="true" dynamicHeight="true">
          <div>
            <img
              className="carouselimgs"
              alt="past housing project"
              src="https://nexgenhousing.s3-us-west-1.amazonaws.com/7887387a-6591-4af9-a3cc-dac66dcdc18d.jpeg"
            />
          </div>
          <div>
            <img
              className="carouselimgs"
              alt="past housing project"
              src="https://nexgenhousing.s3-us-west-1.amazonaws.com/IMG_0638.jpg"
            />
          </div>
          <div>
            <img
              className="carouselimgs"
              alt="past housing project"
              src="https://nexgenhousing.s3-us-west-1.amazonaws.com/IMG_0639.jpg"
            />
          </div>
          <div>
            <img
              className="carouselimgs"
              alt="past housing project"
              src="https://nexgenhousing.s3-us-west-1.amazonaws.com/IMG_0872.jpg"
            />
          </div>
          <div>
            <img
              className="carouselimgs"
              alt="past housing project"
              src="https://nexgenhousing.s3-us-west-1.amazonaws.com/IMG_0877.jpg"
            />
          </div>
          <div>
            <img
              className="carouselimgs"
              alt="past housing project"
              src="https://nexgenhousing.s3-us-west-1.amazonaws.com/IMG_0878.jpg"
            />
          </div>
          <div>
            <img
              alt="past housing project"
              src="https://nexgenhousing.s3-us-west-1.amazonaws.com/IMG_0879.jpg"
            />
          </div>
          <div>
            <img
              alt="past housing project"
              src="https://nexgenhousing.s3-us-west-1.amazonaws.com/IMG_0880.jpg"
            />
          </div>
          <div>
            <img
              alt="past housing project"
              src="https://nexgenhousing.s3-us-west-1.amazonaws.com/IMG_0881.jpg"
            />
          </div>
          <div>
            <img
              alt="past housing project"
              src="https://nexgenhousing.s3-us-west-1.amazonaws.com/IMG_1274.jpg"
            />
          </div>
        </CarouselC>
      </ContainerDiv>
    </div>
  );
};

export default CarouselContainer;
