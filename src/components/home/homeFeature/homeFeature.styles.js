/** @format */

import styled from "styled-components";
import { motion } from "framer-motion";
import primaryColor from "../../../theme/priamry.styles";
export const HomeFeatureSection = styled(motion.section)`
  width: 100%;
  position: relative;
  margin-bottom: 10rem;
`;

export const HomeFeatureContent = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  padding: 3rem;
  width: 100%;
  height: 100%;
  z-index: 20;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  flex-direction: column;
  justify-content: space-between;
  p {
    font-size: 2rem;
    letter-spacing: 0.2rem;
    text-shadow: 0.5rem 0.5rem 0.2rem rgba(1, 1, 1, 0.5);
  }
`;

export const HomeFeatureTitle = styled(motion.h2)`
  font-size: 6rem;
  display: flex;
  flex-direction: column;
  line-height: 5rem;
  grid-column: 1 / 2;
  position: relative;
  bottom: calc(-3rem + (-60%));
  span {
    display: block;
  }
`;

export const HomeFeatureParagraph = styled.p`
  grid-column: 1 /2;
  grid-row: 1/2;
`;

export const HomeFeatureSecondParagraph = styled.p`
  grid-column: 2 / 3;
  grid-row: 1/2;
  justify-self: end;
`;

export const HomeFeatureIcon = styled(motion.div)`
  .icon {
    font-size: 7rem;
    color: ${primaryColor.titleColor};
  }
`;

export const HomeFeatureNews = styled(motion.div)`
  width: 100%;
  display: grid;
`;

export const HomeFeatureNewsBtn = styled(motion.button)`
  background-color: ${primaryColor.titleColor};
  border: none;
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
  justify-self: end;
  padding: 0.5rem 2rem;
  .button_icon {
    margin-right: 2rem;
    font-size: 4rem;
  }
  P {
    font-size: 1.5rem;
    letter-spacing: 0.2rem;
  }
`;
