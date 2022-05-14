/** @format */

import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import primaryColor from "../../theme/priamry.styles";
import maxWidth from "../../config/screen.size";

export const HeaderNav = styled(motion.header)`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 15rem;
  will-change: transform;
  z-index: 100;

  @media only screen and (max-width: ${maxWidth.medium}) {
    height: 10rem;
  }
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

export const HeaderMenu = styled.div`
  display: flex;
  align-items: center;

  .menu {
    display: flex;
    align-items: center;
    margin-right: 5rem;
  }

  @media only screen and (max-width: ${maxWidth.medium}) {
    .menu {
      margin-right: 2rem;
    }
  }
`;
