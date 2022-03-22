/** @format */

import styled from "styled-components";
import { motion } from "framer-motion";

export const Menu = styled(motion.div)`
  width: 5rem;
  height: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const MenuLine = styled(motion.div)`
  width: 4rem;
  height: 0.9rem;
  flex-direction: column;
  background-color: ${({ theme }) => theme.menuColor};
  border-radius: 3px;
  transform-origin: center;

  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;
