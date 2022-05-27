/** @format */

import styled from "styled-components";
import { motion } from "framer-motion";

export const MenuBarContainer = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 9rem;
  width: 100%;
  z-index: 100;
  color: ${({ theme }) => theme.backgroundColor};

  .menu-bar-toggle,
  .menu-bar-container {
    background-color: ${({ theme }) => theme.color};
    box-shadow: 0 0 3rem rgba(0, 0, 0, 0.6);
  }

  .menu-bar-toggle {
    width: 5rem;
    height: 3rem;
    display: block;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 0.5rem 0 0;

    svg {
      width: 100%;
      height: 100%;
      pointer-events: none;
    }
  }
  .menu-bar-container {
    height: 100%;
    border-radius: 2rem 2rem 0 0;
  }
`;
