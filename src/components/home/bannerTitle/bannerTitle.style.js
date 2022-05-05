/** @format */

import styled from "styled-components";
import { motion } from "framer-motion";
import primaryColor from "../../../theme/priamry.styles";
import maxWidth from "../../../config/screen.size";

export const Title = styled(motion.h1)`
  font-size: 20rem;
  position: absolute;
  left: 0;
  letter-spacing: -1rem;
  color: ${primaryColor.titleColor};
  opacity: 0,
  will-change: bottom;
  user-select: none;
  bottom: 0;


  span {
    font-size:inherit;
    display:block;

    &:not(:first-child) {
      margin-top: -26%;
    }
  }

  @media only screen and (max-width: ${maxWidth.small}){
    font-size:15rem;
    z-index:100;
    visibility: visible;
    opacity: 1;
    width:100%;
    overflow: hidden;

    span {
    text-shadow:1rem 1rem 1rem rgba(0,0,0,.4);

    &:not(:first-child) {
      transform: translateX(40%);
    
    }
  }
  }
`;
