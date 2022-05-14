/** @format */

import styled from "styled-components";
import { motion } from "framer-motion";
import maxWidth from "../../config/screen.size";

export const SignInOut = styled(motion.div)`
  font-size: 2rem;
  margin-right: 2.5rem;
  background-color: ${({ theme }) => theme.color};
  color: ${({ theme }) => theme.backgroundColor};
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;

  img {
    width: 3rem;
    margin-right: 1rem;
    border-radius: 0.3rem;
  }

  span {
    font-size: 1.5rem;
  }
`;
