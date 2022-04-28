/** @format */

import styled from "styled-components";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";

export const VirtualSceneContainer = styled.div`
  width: 100%;
  height: 50rem;
  margin-top: 2rem;
  position: relative;

  .fullScreen {
    height: 100%;
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
`;
