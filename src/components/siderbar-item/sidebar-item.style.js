/** @format */

import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

export const SidebarItem = styled(Link)`
  font-size: 6rem;
  text-decoration: none;
  color: inherit;
`;

export const SidebarLi = styled(motion.li)`
  padding: 0.5rem;
`;
