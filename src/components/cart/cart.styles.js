/** @format */

import styled from "styled-components";
import { motion } from "framer-motion";

export const CartContainer = styled(motion.div)`
  width: 9rem;
  height: 9rem;
  position: fixed;
  right: 1%;
  bottom: 1.5%;
  z-index: 30;
  user-select: none;
  h5,
  p {
    position: absolute;
    left: 50%;
    font-size: 1.5rem;
    transform: translate(-50%, -50%);
    color: black;
    z-index: 20;
    text-align: center;
  }

  p {
    top: 55%;
    font-size: 1.8rem;
    font-weight: bold;
  }
  h5 {
    width: 100%;
    bottom: -20%;
    color: white;
  }
`;
