/** @format */

import styled from "styled-components";
import { motion } from "framer-motion";
import maxWidth from "../../config/screen.size";

export const HeaderNav = styled(motion.header)`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 15rem;
  will-change: transform;
  z-index: 100;

  @media only screen and (max-width: ${maxWidth.medium}) {
    height: 10rem;
  }
`;

export const HeaderMenu = styled.div`
  display: flex;
  align-items: center;

  .menu {
    display: flex;
    align-items: center;
    margin-right: 5rem;
  }

  @media only screen and (max-width: ${maxWidth.medium}) {
    .menu {
      margin-right: 2rem;
    }
  }
`;
