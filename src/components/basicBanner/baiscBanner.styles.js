/** @format */

import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import maxWidth from "../../config/screen.size";

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

  @media only screen and (max-width: ${maxWidth.small}) {
    height: 100vh;
  }
`;

export const AboutBannerBG = styled.img`
  width: 100%;
  @media only screen and (max-width: ${maxWidth.mediumAlpha}) {
    height: 100%;
    position: absolute;
    object-fit: cover;
    width: auto;
  }
`;

export const AboutTitle = styled(motion.img)`
  position: absolute;
  width: 100%;
  @media only screen and (max-width: ${maxWidth.mediumBelta}) {
    width: 150%;
    top: -10%;
  }
  @media only screen and (max-width: ${maxWidth.small}) {
    top: 15%;

    span {
      font-size: 1rem;
    }
  }
`;

export const AboutBannerTxt1 = styled(motion.span)`
  ${AboutBannerTxt}
  bottom: 20rem;
`;

export const AboutBannerTxt2 = styled(motion.span)`
  ${AboutBannerTxt}
  bottom:15rem;

  @media only screen and (max-width: ${maxWidth.small}) {
    font-size: 2rem;
    bottom: 17rem;
  }
`;
