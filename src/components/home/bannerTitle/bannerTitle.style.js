/** @format */

import styled from "styled-components";
import { motion } from "framer-motion";
import primaryColor from "../../../theme/priamry.styles";
import screenSize from "../../../theme/screenSize";

export const Title = styled(motion.h1)`
  font-size: 4rem;
  position: absolute;
  left: 50%;
  z-index: 50;
  letter-spacing: 0.3rem;
  transform: translateX(-50%);
  color: ${primaryColor.titleColor};
  text-align: center;
  opacity: 0,
  visibility: hidden;
  will-change: bottom;
  transition: unset;

  @media only screen and (max-width: ${`${screenSize.medium}px`}){
    font-size:3rem;
  }
`;
