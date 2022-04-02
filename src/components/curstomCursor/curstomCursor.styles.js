/** @format */

import styled from "styled-components";
import { motion } from "framer-motion";
import primaryColor from "../../theme/priamry.styles";

export const Cursor = styled(motion.div).attrs(
  ({ mousepositions: { x, y }, scrolly: { ys } }) => {
    return {
      style: {
        top: `${y + ys - 15}px`,
        left: `${x - 15}px`,
      },
    };
  }
)`
  width: 3rem;
  height: 3rem;
  background-color: ${primaryColor.cursorColor};
  position: absolute;
  border-radius: 50%;
  transition-property: width, height, border, bottom, top;
  will-change: transform, width, height, border, bottom, top;
  pointer-events: none;
  transform-origin: center;
  z-index: 999;

  &.hovered {
    background-color: transparent !important;
  }
`;
