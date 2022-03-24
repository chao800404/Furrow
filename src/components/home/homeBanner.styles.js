/** @format */

import styled from "styled-components";
import { motion } from "framer-motion";

export const HomeContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const BannerVideo = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;

  video {
    height: auto;
    min-width: 192rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover;
  }
`;

export const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  display: block;
  background-color: ${({ theme }) => theme};
`;

export const BannerTitle = styled(motion.h1)`
  position: absolute;
  font-size: 20rem;
  left: 0rem;
  bottom: -6rem;
`;
