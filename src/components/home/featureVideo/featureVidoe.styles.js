/** @format */

import styled from "styled-components";
import { motion } from "framer-motion";

export const HomeFeatureVideo = styled(motion.div)`
  width: 100%;
  height: 30rem;
  will-change: transform, opacity;
  overflow: hidden;
  video {
    width: inherit;
    height: inherit;
    object-fit: cover;
    will-change: transform;
    filter: saturate(100%) grayscale(70%) saturate(150%);
  }
`;
