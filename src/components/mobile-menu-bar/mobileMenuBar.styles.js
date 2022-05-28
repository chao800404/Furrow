/** @format */

import styled from "styled-components";
import { motion } from "framer-motion";

export const MenuBarContainer = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 6rem;
  width: 100%;
  z-index: 100;
  color: ${({ theme }) => theme.color};
  border-top: 1px solid rgba(255, 255, 255, 0.2);

  .menu-bar-toggle,
  .menu-bar-container {
    background-color: ${({ theme }) => theme.backgroundColor};
    box-shadow: 0 0 3rem rgba(0, 0, 0, 0.6);
    padding: 2rem 1rem;
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
    display: flex;
    align-items: center;
  }

  .menu-container {
    border-right: 1.5px solid #c1c1c1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .menu-logo {
    zoom: 0.8;
    padding: 0 2rem;
  }

  .menu-cart {
    margin-left: auto;
    border-right: none;
    border-left: 1.5px solid #c1c1c1;
  }
`;
