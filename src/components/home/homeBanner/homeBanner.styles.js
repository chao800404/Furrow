/** @format */

import styled from "styled-components";
import { motion } from "framer-motion";
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
`;

export const BannerVideo = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  overflow-x: hidden;
  position: absolute;

  video {
    height: auto;
    min-width: 192rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover;

    @media only screen and (max-width: ${maxWidth.small}) {
      height: 100%;
    }
  }
`;

export const BannerTitle = styled(motion.h1)`
  position: absolute;
  font-size: 20rem;
  left: 0rem;
  bottom: -6rem;
`;
