/** @format */

import styled from "styled-components";
import { motion } from "framer-motion";
import maxWidth from "../../config/screen.size";

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

  @media only screen and (max-width: ${maxWidth.small}) {
    width: 5rem;
    height: 5rem;
    bottom: 0;
    right: 0.5rem;
    border-left: 1px solid rgba(0, 0, 0, 0.2);
    margin: auto;

    div {
      color: ${({ theme }) => theme.backgroundColor};
    }
    p {
      color: ${({ theme }) => theme.backgroundColor};
      font-weight: 500;
      top: 60%;
      font-size: 1rem;
    }

    h5 {
      width: 200%;
      bottom: 5%;
      left: -100%;
      color: ${({ theme }) => theme.backgroundColor};
    }
  }
`;
