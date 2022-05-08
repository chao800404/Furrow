/** @format */

import styled from "styled-components";
import { motion } from "framer-motion";
import maxWidth from "../../config/screen.size";

export const SlideContainer = styled.div`
  width: 100%;
  height: 60rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  padding: 0;
  margin: 0;

  @media only screen and (max-width: ${maxWidth.large}) {
    height: 35vmax;
  }

  @media only screen and (max-width: 520px) {
    height: 30vmax;
  }
`;

export const SlideImgContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: relative;
`;

export const SlideImg = styled(motion.img)`
  width: 100%;
  z-index: 100;
  top: 0;
  position: absolute;
`;
