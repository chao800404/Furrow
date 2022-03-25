/** @format */

import styled from "styled-components";
import { motion } from "framer-motion";
import primaryColor from "../../../theme/priamry.styles";

export const Title = styled(motion.h1)`
  font-size: 4rem;
  position: absolute;
  left: 50%;
  z-index: 50;
  letter-spacing: 0.3rem;
  transform: translateX(-50%);
  color: ${primaryColor.titleColor};
  opacity: 0,
  visibility: hidden;
  will-change: bottom;
  transition: unset;
`;
