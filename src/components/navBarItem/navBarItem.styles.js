/** @format */

import { motion } from "framer-motion";
import styled from "styled-components";

export const NavBarCollapsed = styled(motion.div)`
  width: 100%;
  padding: 1rem;
  will-change: height;
`;

export const NavBarContainer = styled(motion.div)`
  h2 {
    display: flex;
    justify-content: end;
    align-items: center;
    user-select: none;
  }
`;

export const NavBarIcon = styled(motion.div)`
  font-size: 1.8rem;
  padding: 1rem;
`;

export const NavList = styled(motion.p)`
  font-size: 1.5rem;
  padding: 1rem 2rem;
  user-select: none;
`;
