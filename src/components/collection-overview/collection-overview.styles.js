/** @format */

import { motion } from "framer-motion";
import styled from "styled-components";

export const CollectionOverViewContainer = styled(motion.section)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const OverViewCardContainer = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 4rem 2rem;
`;
