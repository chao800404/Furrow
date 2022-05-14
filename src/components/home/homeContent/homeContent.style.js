/** @format */

import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import primaryColor from "../../../theme/priamry.styles";
import { ReactSVG } from "react-svg";
import maxWidth from "../../../config/screen.size";

export const HomeContainer = styled.section`
  width: 100%;
  padding: 20rem 0;
  display: grid;
  grid-column-gap: 2rem;
  grid-template-rows: repeat(2, 1fr) 1.5fr;
  grid-template-columns: repeat(2, 1fr);

  @media only screen and (max-width: ${maxWidth.small}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 30rem);
    padding: 5rem 0;
    overflow: hidden;
  }
`;

export const Paragraph = styled(motion.p)`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  align-self: center;
  padding: 5rem 0;

  @media only screen and (max-width: ${maxWidth.small}) {
    text-align: center;
    padding: 5rem 0;
    grid-column: 1 / -1;
    grid-row: 3 / 4;
  }
`;

export const ContentTitle = styled(motion.div)`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  display: block;
  justify-self: center;
  h2 {
    color: ${primaryColor.titleColor};
    margin-top: 2%;
  }
  P {
    color: inherit;
  }

  @media only screen and (max-width: ${maxWidth.small}) {
    text-align: center;
    grid-column: 1 / -1;
    align-self: center;
  }
`;

const an = keyframes`
 from {
  stroke-dasharray: 300;
  stroke-dashoffset: 300;
 
  }

  to {
    stroke-dasharray: 300;
    stroke-dashoffset: 0;
    
  }
`;

export const MarkSvgContainer = styled(motion.div)`
  width: 100%;
  text-align: end;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  align-self: end;
  .markSvg {
    fill: none;
    stroke: ${({ color }) => color.color};
    stroke-width: 0.5;
    stroke-linejoin: round;
    stroke-miterlimit: 10;
    transition-delay: 0.3s;
  }

  .markSvgAnstart {
    g {
      animation: ${an} 2.5s linear;
    }
  }
  .hidden {
    opacity: 0;
  }

  @media only screen and (max-width: ${maxWidth.small}) {
    grid-column: 1 / -1;
    grid-row: 2/ 3;
    align-self: center;
  }
`;

export const MarkSvgSideContainer = styled(ReactSVG)`
  fill: none;
  stroke: ${({ color }) => color.color};
  stroke-width: 0.2;
  stroke-linejoin: round;
`;

export const MarkSvgSideContent = styled(motion.div)`
  align-self: center;
  grid-column: 1 / 2;
  grid-row: 3 / 4;

  @media only screen and (max-width: ${maxWidth.small}) {
    text-align: center;
    grid-column: 1 / -1;
    grid-row: 4 / 5;
    align-self: center;
  }
`;
