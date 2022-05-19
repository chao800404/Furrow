/** @format */

import { motion } from "framer-motion";
import styled from "styled-components";
import primaryColor from "../../theme/priamry.styles";
import maxWidth from "../../config/screen.size";

export const FeatureContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 20rem 0;

  @media only screen and (max-width: ${maxWidth.small}) {
    padding: 10rem 0;
  }
`;

export const FeatureStory = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-template-rows: repeat(4, 30rem);
  margin-top: 20rem;

  @media only screen and (max-width: ${maxWidth.small}) {
    grid-template-rows: repeat(4, 52rem);
    margin-top: 0;
  }
`;

export const FeatureStoryContainer = styled.div`
  display: grid;
  grid-template-columns: inherit;
  grid-column: 1/ -1;
  position: sticky;
  top: calc(50% - 15rem);
  width: 90%;
  margin: 0 auto;

  @media only screen and (max-width: ${maxWidth.small}) {
    grid-template-columns: 1fr;
    width: 100%;
    height: 100%;
    top: calc(50% - 30rem);
  }
`;

export const FeatureBg = styled.div`
  position: absolute;
  top: -100%;
  left: -20%;
  opacity: 0.2;
  font-size: 30vw;
  font-weight: 900;

  @media only screen and (max-width: ${maxWidth.small}) {
    width: 30vw;
    top: -50%;
    left: 70%;
    font-size: 50vw;
  }
`;

export const FeatureContent = styled.div`
  position: relative;

  h3 {
    font-size: 4.5rem;
  }

  p {
    font-size: 1.8rem;
    width: 90%;
  }
  span {
    font-size: 3rem;
    bottom: 30%;
    position: absolute;

    &:nth-child(2) {
      left: 4.5rem;
    }
  }

  @media only screen and (max-width: ${maxWidth.small}) {
    h3 {
      height: 8rem;
    }
    p {
      height: 10rem;
      width: 100%;
      font-size: 1.6rem;
    }
    span {
      bottom: 0;
      position: sticky;
    }
  }
`;

export const FeatureStoryBtnContainer = styled.div`
  margin-top: 3rem;
  display: flex;

  @media only screen and (max-width: ${maxWidth.small}) {
    margin-top: 0;
    height: 5rem;
  }
`;

export const FeatureImgContainer = styled.div`
  position: relative;
  img {
    width: 100%;
    height: 100%;
    user-select: none;
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
    font-size: 1.3rem;
    color: ${primaryColor.primaryBlack};
    background-color: rgba(255, 255, 255, 0.7);
    letter-spacing: 0.1rem;
    border-radius: 5px;
    box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.6);
    text-align: center;
    user-select: none;
  }

  @media only screen and (max-width: ${maxWidth.small}) {
    span {
      right: 0;
      bottom: 0;
      left: 0;
    }
  }
`;

export const FeatureGlassesBtn = styled(motion.div)`
  position: absolute;
  opacity: 0.9;
  borderradius: 50%;
  boxshadow: 0 0 1rem rgba(0, 0, 0, 0.5);
  z-index: 50;

  svg,
  span {
    box-shadow: 0 0 1rem rgba(0, 0, 0, 1);
  }

  svg {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    pointer-events: none;
  }

  span {
    position: absolute;
    display: block;
    font-size: 1.3rem;
    width: auto;
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

  .proof_icon {
    width: 15rem;
  }

  @media only screen and (max-width: ${maxWidth.small}) {
    .proof_icon {
      width: 10rem;
    }
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

  @media only screen and (max-width: ${maxWidth.small}) {
    height: auto;
    margin-top: 15rem;
    h4 {
      width: 70%;
      font-size: 4.5rem;
      margin: 0 auto 2rem 0;
    }
  }
`;

export const FeatureFunctionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;

  @media only screen and (max-width: ${maxWidth.small}) {
    grid-template-columns: 1fr;
  }
`;

export const FeatureGlassesContainer = styled.div`
  width: 80%;
  position: relative;

  img {
    width: 150%;
  }

  [data-type="featureBtn-0"] {
    top: 35%;
    left: 50%;
  }

  [data-type="featureBtn-1"] {
    top: 25%;
    left: 33%;
  }

  [data-type="featureBtn-2"] {
    top: 40%;
    right: 25%;
  }

  .function-desc-1 {
    top: -10rem;
  }
  .function-desc-2 {
    left: -14rem;
  }
  .function-desc-3 {
    top: -5rem;
    right: -20rem;
    width: 20rem;
  }

  @media only screen and (max-width: ${maxWidth.small}) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5rem;
    overflow: hidden;
    img {
      user-select: none;
    }
    [data-type="featureBtn-0"] {
      top: 35%;
      left: 22%;
    }

    [data-type="featureBtn-1"] {
      top: 25%;
      left: 10%;
    }

    [data-type="featureBtn-2"] {
      top: 40%;
      right: 45%;
    }

    .function-desc-1 {
      top: -10rem;
    }
    .function-desc-2 {
      left: 0;
      top: -7rem;
    }
    .function-desc-3 {
      bottom: -8rem;
      top: unset;
      right: -15rem;
      width: auto;
    }
  }
`;
