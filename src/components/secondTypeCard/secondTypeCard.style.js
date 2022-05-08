/** @format */

import styled from "styled-components";
import { motion } from "framer-motion";
import maxWidth from "../../config/screen.size";

export const SecondCardContainer = styled(motion.div)`
  width: 100%;
  background-color: #fff;
  box-shadow: 0.2rem 0.2rem 2rem rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  align-items: center;
  padding: 2rem 3rem;
  position: relative;
  img {
    width: 100%;
  }

  h3 {
    color: #161616;
    span {
      font-size: 1.5rem;
      font-weight: 300;
    }
  }

  p {
    color: #161616;
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
  button {
    position: absolute;
    bottom: 0;
    width: 80%;
    transform: translateY(50%);
    background-color: #000;
  }
  @media only screen and (max-width: ${maxWidth.large}) {
    .second-card-img {
      height: 18rem;
    }
  }

  @media only screen and (max-width: ${maxWidth.mediumAlpha}) {
    .second-card-img {
      height: 15rem;
    }
  }

  @media only screen and (max-width: ${maxWidth.mediumBelta}) {
    width: 22rem;
    height: 28rem;
  }
`;

export const CloserLook = styled(motion.div)`
  width: 60%;
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10rem;
  color: #fff;
  padding: 2rem 1.5rem;
  font-size: 1.5rem;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
  will-change: bottom;
  visibility: hidden;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`;
