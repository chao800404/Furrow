/** @format */

import styled from "styled-components";
import { motion } from "framer-motion";
import primaryColor from "../../../theme/priamry.styles";
import screenSize from "../../../theme/screenSize";

export const Title = styled(motion.h1)`
  font-size: 20rem;
  position: absolute;
  left: 0;
  letter-spacing: -1rem;
  color: ${primaryColor.titleColor};
  opacity: 0,
  visibility: hidden;
  will-change: bottom;
  zIndex:-2000;
  user-select: none;
  bottom: 0;


  span {
    font-size:inherit;
    display:block;

    &:not(:first-child) {
      margin-top: -26%;
    }
  }

  @media only screen and (max-width: ${`${screenSize.medium}px`}){
    font-size:3rem;
  }
`;
