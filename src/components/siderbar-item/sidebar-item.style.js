/** @format */

import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const SidebarItem = styled(Link)`
  font-size: 6rem;
  text-decoration: none;
  color: inherit;
`;

export const SidebarLi = styled(motion.li)`
  padding: 0.5rem;
`;
