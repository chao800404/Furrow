/** @format */

import styled from "styled-components";
import { motion } from "framer-motion";

export const CollectionPreviewContainer = styled(motion.section)`
  width: 100%;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 20rem 0rem 20rem 0;
  min-height: 100vh;
  h2 {
    grid-column: 1 / -1;
    font-size: 5rem;
  }
  h3 {
    color: black;
  }
`;
export const CollectionPreviewTitle = styled.div`
  grid-column: 1 / 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
