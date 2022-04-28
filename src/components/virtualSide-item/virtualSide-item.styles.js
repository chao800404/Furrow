/** @format */

import styled from "styled-components";
import { motion } from "framer-motion";

export const VirtualSideItemContainer = styled(motion.div)`
  width: inherit;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 1rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 0.5rem;
  height: 8rem;
  overflow: hidden;

  &:not(:first-child) {
    margin-top: 0.5rem;
  }

  h3,
  span {
    color: #161616;
  }

  h3 {
    font-size: 2rem;
    align-self: end;
  }

  span {
    font-size: 1.5rem;
    align-self: start;
  }

  .virtual-img {
    width: inherit;
    grid-column: 1 / 2;
    grid-row: 1 / -1;
    align-self: center;
    justify-self: center;
  }
`;
