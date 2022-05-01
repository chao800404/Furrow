/** @format */

import styled from "styled-components";

export const FeatureBannerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
`;

export const FeatureTitle = styled.div`
  letter-spacing: 0.1rem;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  text-shadow: 0rem 0rem 1rem rgba(0, 0, 0, 0.5);

  h1 {
    font-size: calc(5rem + 4vw);
  }
`;

export const FeatureBannerImgContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  min-height: calc(100vh - 40rem);
`;
