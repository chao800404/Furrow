/** @format */

import styled from "styled-components";
import { motion } from "framer-motion";
import maxWidth from "../../../config/screen.size";

export const HomeArticleSection = styled(motion.section)`
  width: 100%;
  height: 60rem;
  margin-top: 10rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 2rem;

  @media only screen and (max-width: ${maxWidth.small}) {
    grid-template-columns: 1fr;
    grid-template-rows: 60rem 40rem;
    height: 120rem;
    display: none;
  }
`;
