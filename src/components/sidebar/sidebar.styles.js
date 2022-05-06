/** @format */

import styled from "styled-components";
import primaryColor from "../../theme/priamry.styles";
import { motion } from "framer-motion";
import maxWidth from "../../config/screen.size";

export const SidebarContainer = styled(motion.div)`
  width: 100%;
  ${
    "" /* height: ${({ windowHeight }) => windowHeight + "px"};
  min-height: -webkit-fill-available; */
  }
  height: calc(100vh - calc(100vh - 100%));
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2000;
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

  @media only screen and (max-width: ${maxWidth.medium}) {
    grid-template-columns: minmax(30rem, 1fr) minmax(20rem, 1.3fr);
  }

  @media only screen and (max-width: ${maxWidth.small}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    padding: 4rem;
  }
`;

export const SidebarImage = styled(motion.div)`
 
  height: auto
  z-index: 40;
  img {
    width: 20vw;

    @media only screen and (max-width: ${maxWidth.medium}){
      width:calc(12rem + 15vh);
    }
    @media only screen and (max-width: ${maxWidth.small}){
      display:none;
    }
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

  @media only screen and (max-width: ${maxWidth.small}) {
    grid-column: span 1;
    grid-row: 1 /3;
    justify-self: center;
    margin-top: 0;
  }
`;
