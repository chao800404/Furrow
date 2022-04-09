/** @format */

import { motion } from "framer-motion";
import styled from "styled-components";

export const CollectionOverViewContainer = styled(motion.section)`
  display: flex;
  flex-direction: column;
  width: 100%;

  h1 {
    font-size: 15rem;
    margin-top: 5rem;
  }
`;

export const OverViewCardContainer = styled(motion.div)`
  width: 100%;
`;
