/** @format */

import { motion } from "framer-motion";
import styled from "styled-components";
import primaryColor from "../../theme/priamry.styles";

export const FeatureContainer = styled.section`
  width: 100%;
  min-height: 100vh;
`;

export const FeatureStory = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-template-rows: repeat(4, 30rem);
  margin-top: 20rem;
`;

export const FeatureContent = styled.div`
  width: 90%;
  position: sticky;
  top: calc(50% - 15rem);
  h3 {
    font-size: 4.5rem;
  }

  p {
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
  }
  span {
    font-size: 3rem;
    bottom: 30%;
    position: absolute;

    &:nth-child(2) {
      left: 4.5rem;
    }
  }
`;

export const FeatureImgContainer = styled.div`
  position: sticky;
  top: calc(50% - 15rem);
  img {
    width: 100%;
    height: 100%;
  }

  span {
    position: absolute;
    bottom: 2rem;
    left: -8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20rem;
    padding: 1rem;
    font-size: 1.5rem;
    color: ${primaryColor.primaryBlack};
    background-color: rgba(255, 255, 255, 0.7);
    letter-spacing: 0.1rem;
    border-radius: 5px;
    box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.6);
    text-align: center;
  }
`;

export const FeatureGlassesBtn = styled(motion.div)`
  position: absolute;
  opacity: 0.9;
  top: ${({ top }) => (top ? top : null)};
  left: ${({ left }) => (left ? left : null)};
  right: ${({ right }) => (right ? right : null)};
  bottom: ${({ bottom }) => (bottom ? bottom : null)};
  borderradius: 50%;
  boxshadow: 0 0 1rem rgba(0, 0, 0, 0.5);

  span {
    position: absolute;
    display: block;
    font-size: 1.5rem;
    width: 12rem;
    padding: 1rem;
    background-color: #fff;
    border-radius: 0.5rem;
    color: #161616;
    visibility: hidden;
    opacity: 0;

    &.visible {
      visibility: visible;
      opacity: 1;
    }
  }
`;

export const ProofIconContainer = styled.div`
  display: flex;
  gap: 2rem;
  height: 10rem;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  span {
    font-size: 1.5rem;
    letter-spacing: 0.2rem;
    display: block;
    width: 100%;
  }
`;

export const FeatureFunction = styled.div`
  height: 50rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 30rem;

  h4 {
    font-size: 5rem;
    width: 100%;
    margin-bottom: 5rem;
  }
`;
