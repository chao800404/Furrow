/** @format */

import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const AboutBannerTxt = css`
  position: absolute;
  text-align: center;
  font-size: 3rem;
  text-shadow: 0 0 1rem rgba(0, 0, 0, 1);
`;

export const AboutBanner = styled(motion.div)`
  width: 100%;
  height: 70rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  img {
    width: 100%;
  }
`;

export const AboutTitle = styled(motion.img)`
  position: absolute;
`;

export const AboutBannerTxt1 = styled(motion.span)`
  ${AboutBannerTxt}
  bottom: 20rem;
`;

export const AboutBannerTxt2 = styled(motion.span)`
  ${AboutBannerTxt}
  bottom:15rem;
`;
