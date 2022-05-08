/** @format */

import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import maxWidth from "../../config/screen.size";

export const SidebarItem = styled(Link)`
  font-size: 6rem;
  text-decoration: none;
  color: inherit;
  font-weight: 500;

  @media only screen and (max-width: ${maxWidth.medium}) {
    font-size: calc(3rem + 2.5vw);
  }
  @media only screen and (max-width: ${maxWidth.small}) {
    font-size: calc(3rem+1vw);
  }
`;

export const SidebarLi = styled(motion.li)`
  padding: 0.5rem;
`;
