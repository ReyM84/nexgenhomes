import React from "react";
import styled from "styled-components";

const FamilyContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #27265e;
  position: relative;
  @media (max-width: 575.98px) {
    height: 175vh;
  }
  @media (max-width: 767.98px) and (min-width: 576px) {
    height: 200vh;
  }
`;

const FamilyParagraph = styled.p`
  font-family: GillSans;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #faf5f5;
  width: 40%;
  margin: auto;

  @media (max-width: 575.98px) {
    width: 80vw;
  }
  @media (max-width: 767.98px) and (min-width: 576px) {
    left: 1px;
    width: 80vw;
  }
  @media (max-width: 991.98px) and (min-width: 768px) {
    width: 60vw;
  }
`;

const FamilyBody = styled.div`
  margin-top: 96px;

  @media (max-width: 575.98px) {
    margin-top: 300px;
  }
  @media (max-width: 767.98px) and (min-width: 576px) {
    margin-top: 180px;
  }
  @media (max-width: 991.98px) and (min-width: 768px) {
    margin-top: 180px;
  }
`;

const FamilyPic = styled.img`
  position: absolute;
  height: 38%;
  left: 90px;
  top: 110px;

  @media (max-width: 575.98px) {
    width: 40vw;
    height: 20vh;
    left: 30%;
  }
  @media (max-width: 767.98px) and (min-width: 576px) {
    left: 40%;
    width: 150px;
    height: 150px;
    top: 20px;
  }
  @media (max-width: 991.98px) and (min-width: 768px) {
    left: 40%;
    width: 150px;
    height: 150px;
    top: 20px;
  }
`;

const Family = () => {
  return (
    <div>
      <FamilyContainer id="contact">
        <FamilyPic src="./Assets/brandonfamily.png" />
        <br />
        <FamilyBody>
          <FamilyParagraph>
            <span style={{ fontSize: "24px" }}>NexGen Homes </span>is a family
            owned business specializing in custom rehab and remodels as well
            ground up construction. We are a local resident in the New Braunfels
            area with 20 years’ experience.
          </FamilyParagraph>
          <br />
          <FamilyParagraph>
            Remodeling or building your dream home should be an exciting
            experience. This is where{" "}
            <span style={{ fontWeight: "700" }}>NexGen Homes' </span> expertise
            and customer service sets us apart. We work with you hand in hand on
            every aspect and detail of your home keeping you informed every step
            of the way.
          </FamilyParagraph>
          <br />
          <br />
          <FamilyParagraph style={{ fontSize: "32px" }}>
            Expand or Remodel
          </FamilyParagraph>
          <br />
          <FamilyParagraph>
            Do you want more space in your home or a detached garage or
            mother-in-law quarter? Do you find yourself constantly bumping
            elbows with family members in your kitchen? Then it might be time to
            expand either on the ground floor or by adding a second story to
            your home.
          </FamilyParagraph>
          <br />
          <FamilyParagraph>
            We at{" "}
            <span style={{ fontWeight: "700" }}>
              NexGen Homes are your problem solvers
            </span>{" "}
            – Contact us and we will design a specialized plan to increase the
            living area of your home making it a better fit for you and your
            family.
          </FamilyParagraph>
          <br />
          <FamilyParagraph>
            Together we will go over the design plans for your home and give you
            a quote. We understand that in today’s market every dollar counts
            and that is specifically why we double check our work and pay very
            close attention to every detail.
          </FamilyParagraph>
          <br />
          <FamilyParagraph>
            At NexGen Homes we pride ourselves with providing quality
            workmanship on every phase of construction making sure that nothing
            is overlooked. We offer new innovations for operating your home at
            peak performance as well as providing the timeless classics.
          </FamilyParagraph>
          <br />
          <FamilyParagraph>
            We treat each project we build as if it were our very own home –
            with tender loving care! We will help you turn your house into the
            Dream Home you have always wanted
          </FamilyParagraph>
        </FamilyBody>
      </FamilyContainer>
    </div>
  );
};

export default Family;
