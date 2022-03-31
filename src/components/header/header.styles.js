/** @format */

import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import primaryColor from "../../theme/priamry.styles";

export const HeaderNav = styled(motion.header)`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 15rem;
  will-change: transform;
  z-index: 100;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
  span {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: ${primaryColor["logoPointColor"]};
    display: block;
    margin: 0 5px;
  }
`;

export const LinkStyle = styled(Link)`
  text-decoration: none;
  font-size: 2.5rem;
  font-weigth: 1200;
  color: inherit;
`;
