/** @format */

import styled from "styled-components";
import { motion } from "framer-motion";
import primaryColor from "../../theme/priamry.styles";

export const LinkBtnContainer = styled(motion.button)`
  border: none;
  border: 1px solid ${(props) => props.theme.color};
  background-color: transparent;
  width: 12rem;
  height: 4rem;
  border-radius: 0.2rem;
  font-size: 2rem;
  letter-spacing: 0.2rem;
  box-shadow: 0.2rem 0.2rem 1rem rgba(0, 0, 0, 0.2);
  &:not(:first-child) {
    margin-left: 1rem;
  }
  &:hover {
    background-color: ${primaryColor.cursorColor};
    color: ${(props) => props.theme.backgroundColor};
  }
`;
