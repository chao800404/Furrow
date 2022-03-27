/** @format */

import styled from "styled-components";
import primaryColor from "../../theme/priamry.styles";
import { motion } from "framer-motion";

export const SidebarContainer = styled(motion.div)`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 50;
  backdrop-filter: blur(0.3rem);

  &::before {
    content: "";
    width: 40%;
    min-width: 320px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${primaryColor.cursorColor};
    z-index: 31;
    box-shadow: 5rem 0 2rem rgba(0, 0, 0, 0.6);
  }
`;

export const Sidebar = styled.ul`
  height: 100%;
  z-index: 40;
  display: flex;
  justify-content: center;
  list-style-type: none;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: calc(100vw - 65%);
  margin-top: 5rem;
`;
