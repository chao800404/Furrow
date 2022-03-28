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
  display: grid;
  grid-template-columns: 1.5fr 3fr;

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

export const SidebarImage = styled(motion.div)`
 
  height: auto
  z-index: 40;
  img {
    width: 20vw;
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
  margin-top: 5rem;
  grid-column: 2 / -1;
`;
