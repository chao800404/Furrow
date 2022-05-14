/** @format */

import styled from "styled-components";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import maxWidth from "../../config/screen.size";

export const VirtualSceneContainer = styled.div`
  width: 80rem;
  height: 50rem;
  margin-top: 2rem;
  position: relative;

  .fullScreen {
    height: 100%;
  }

  @media only screen and (max-width: ${maxWidth.large}) {
    width: 72rem;
  }

  @media only screen and (max-width: ${maxWidth.medium}) {
    width: 66rem;
  }
  @media only screen and (max-width: ${maxWidth.mediumAlpha}) {
    width: 65vw;
  }
  @media only screen and (max-width: ${maxWidth.mediumBelta}) {
    width: 100%;
  }
`;

export const VirtualCanvas = styled(Canvas)`
  width: 100%;
  height: initial;
`;

export const FullScreenBtn = styled(motion.div)`
  width: 5rem;
  height: 5rem;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 2.5rem;
    opacity: 0.5;
    fill: rgba(0, 0, 0, 0.5);
  }

  @media only screen and (max-width: ${maxWidth.small}) {
    display: none;
  }
`;
