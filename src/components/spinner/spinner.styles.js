/** @format */

import { motion } from "framer-motion";
import styled from "styled-components";

export const SpinnerContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SpinnerMotion = styled(motion.div)`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  border: 0.5rem solid rgba(255, 255, 255, 0.4);
  position: relative;

  &:before {
    content: "";
    width: 5rem;
    height: 5rem;
    position: absolute;
    box-sizing: border-box;
    border-radius: 100%;
    border: 0.5rem solid transparent;
    background: linear-gradient(45deg, #fff 50%, transparent 50%) border-box;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 20;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;
