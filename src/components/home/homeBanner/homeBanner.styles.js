/** @format */

import styled from "styled-components";
import maxWidth from "../../../config/screen.size";

export const HomeContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 10;

  @media only screen and (max-width: ${maxWidth.small}) {
    z-index: unset;
  }
`;

export const BannerVideo = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  overflow-x: hidden;
  position: relative;
  @media only screen and (max-width: ${maxWidth.small}) {
    position: fixed;
  }
`;

export const VideoContainer = styled.video`
  height: auto;
  min-width: 192rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  -o-object-fit: cover;
  @media only screen and (max-width: ${maxWidth.small}) {
    height: 100%;
  }
`;

// export const BannerTitle = styled(motion.h1)`
//   position: relative;
//   font-size: 20rem;
//   height: calc(100vh - calc(100vh - 100%));
//   left: 0rem;
//   bottom: -6rem;
// `;
