import React from "react";
import styled from "styled-components";
import Gallery from "react-grid-gallery";

const IMAGES = [
  {
    src: "https://nexgenhousing.s3-us-west-1.amazonaws.com/IMG_0594.JPG",
    thumbnail: "https://nexgenhousing.s3-us-west-1.amazonaws.com/IMG_0594.JPG",
    thumbnailWidth: 320,
    thumbnailHeight: 174
  },
  {
    src: "https://nexgenhousing.s3-us-west-1.amazonaws.com/IMG_0595.JPG",
    thumbnail: "https://nexgenhousing.s3-us-west-1.amazonaws.com/IMG_0595.JPG",
    thumbnailWidth: 320,
    thumbnailHeight: 212
  },

  {
    src:
      "https://nexgenhousing.s3-us-west-1.amazonaws.com/7887387a-6591-4af9-a3cc-dac66dcdc18d.jpeg",
    thumbnail:
      "https://nexgenhousing.s3-us-west-1.amazonaws.com/7887387a-6591-4af9-a3cc-dac66dcdc18d.jpeg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
  },
  {
    src:
      "https://nexgenhousing.s3-us-west-1.amazonaws.com/58857241795__0C9E6236-8311-4141-8FAA-42B8C3BFF6E1.JPG",
    thumbnail:
      "https://nexgenhousing.s3-us-west-1.amazonaws.com/58857241795__0C9E6236-8311-4141-8FAA-42B8C3BFF6E1.JPG",
    thumbnailWidth: 320,
    thumbnailHeight: 174
  },
  {
    src: "https://nexgenhousing.s3-us-west-1.amazonaws.com/IMG_0594.JPG",
    thumbnail: "https://nexgenhousing.s3-us-west-1.amazonaws.com/IMG_0594.JPG",
    thumbnailWidth: 320,
    thumbnailHeight: 174
  },
  {
    src: "https://nexgenhousing.s3-us-west-1.amazonaws.com/IMG_0595.JPG",
    thumbnail: "https://nexgenhousing.s3-us-west-1.amazonaws.com/IMG_0595.JPG",
    thumbnailWidth: 320,
    thumbnailHeight: 212
  }
];

const PastProjectsContainer = styled.div`
  background-color: #ffffff;
  height: 100vh;
  width: 100vw;
  position: relative;
`;

const GalleryDiv = styled.div`
  position: relative;
  top: 50px !important;
  left: 15%;
  width: 80%;
`;

const PastProjectTitle = styled.h1`
  font-family: GillSans;
  font-size: 72px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacintg: normal;
  text-align: center;
  color: #27265e;
  padding-top: 72px;
`;

const PastProjects = () => {
  return (
    <div>
      <PastProjectsContainer>
        <PastProjectTitle>Past Projects</PastProjectTitle>
        <GalleryDiv>
          <Gallery images={IMAGES} margin="15px" />
        </GalleryDiv>
      </PastProjectsContainer>
    </div>
  );
};

export default PastProjects;
