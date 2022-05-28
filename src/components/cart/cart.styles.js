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
  z-index: 300;
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

  .cart-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 5rem;
    z-index: 1;
  }

  @media only screen and (max-width: ${maxWidth.small}) {
    margin: auto;
    position: relative;
    width: 5rem;

    p {
      color: ${({ theme }) => theme.color};
      font-weight: 500;
      top: 15%;
      font-size: 1rem;
    }

    h5 {
      display: none;
    }

    .cart-icon {
      z-index: 1;
      font-size: 3rem;
      color: ${({ theme }) => theme.color};
      top: 9%;
      left: 50%;
    }
  }
`;
