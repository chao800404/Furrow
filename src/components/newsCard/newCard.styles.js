/** @format */

import styled, { css } from "styled-components";
import primaryColor from "../../theme/priamry.styles";
import { motion } from "framer-motion";
import maxWidth from "../../config/screen.size";

const basicCardStyle = css`
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.3);
  border-radius: 1rem;
  background-color: ${primaryColor.primaryWhite};
  overflow: hidden;
  position: relative;

  @media only screen and (max-width: ${maxWidth.smaller}) {
    background-color: transparent;
    overflow: unset;
    box-shadow: unset;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: unset;
    padding: 1rem 0;
  }
`;

const markIconContainer = css`
  width: 4rem;
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  color: #161616;

  @media only screen and (max-width: ${maxWidth.smaller}) {
    color: #fff;
    width: 3rem;
    height: 3rem;
  }
`;

export const NewsCardContainer = styled(motion.div)`
  height: 55rem;
  ${basicCardStyle}
  z-index:20;
  .NewCard-Image {
    height: 50%;
  }

  svg {
    width: 80%;
    height: 80%;
  }

  @media only screen and (max-width: ${maxWidth.small}) {
    height: 45rem;
  }
  @media only screen and (max-width: ${maxWidth.smaller}) {
    display: flex;
    height: auto;
    flex-direction: row-reverse;

    .NewCard-Image {
      height: 9rem;
      flex: 1.5;
      margin: auto;
    }
  }
`;

export const NewsCardTextContent = styled.div`
  padding: 3rem 5rem;

  span,
  h3,
  p {
    color: ${primaryColor.primaryBlack};
  }

  h3 {
    font-size: 3rem;
    font-weight: bold;
  }

  span {
    margin-top: 1rem;
    display: block;
    font-size: 1.5rem;
    font-weight: bold;
  }

  p {
    opacity: 0.6;
    font-size: 1.5rem;
    margin-top: 1rem;
  }

  @media only screen and (max-width: ${maxWidth.small}) {
    padding: 2rem 3rem;
    h3 {
      font-size: 2rem;
    }
  }

  @media only screen and (max-width: ${maxWidth.smaller}) {
    flex: 3;
    padding: 1rem 1.5rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-row: repeat(2, 1fr);
    grid-row-gap: 2rem;
    span {
      margin-top: 0.5rem;
      font-size: 1rem;
      zoom: 0.8;
      text-align: end;
      align-self: center;
    }

    h3,
    p,
    span {
      color: ${primaryColor.primaryWhite};
      grid-column: 2 / span 1;
    }

    h3 {
      font-size: 1.2rem;
      grid-column: 1 / span 2;
    }
    p {
      display: none;
    }
  }
`;

export const NewsCardNotUnfold = styled(motion.div)`
  ${basicCardStyle}
  height:13rem;
  display: flex;
  align-items: center;

  .card-second-type {
    height: 100%;
    flex: 1;
  }
`;

export const NewsCardTextSecondContent = styled.div`
  padding: 1.5rem;
  flex: 1.3;
  span,
  h3,
  p {
    color: ${primaryColor.primaryBlack};
  }

  h3 {
    font-size: 1.8rem;
    font-weight: bold;
  }

  span {
    margin-top: 0.2rem;
    display: block;
    font-size: 1rem;
    font-weight: bold;
  }

  p {
    opacity: 0.6;
    font-size: 1rem;
    margin-top: 0.2rem;
  }

  @media only screen and (max-width: ${maxWidth.mediumBelta}) {
    h3,
    p {
      font-size: 1rem;
      zoom: 0.8;
    }
  }
`;

export const NewsCardLink = styled.div`
  ${markIconContainer}

  border-radius: 1rem;

  &:hover {
    background-color: #161616;
    transition: all 0.2s ease-in-out;
    color: #fff;
    border: none;
  }
`;

export const NewsCardMarkContainer = styled.div`
  width: auto;
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  gap: 1rem;

  @media only screen and (max-width: ${maxWidth.smaller}) {
    position: static;
    grid-row: 2 / span 1;
  }
`;

export const NewsCardBookmark = styled.div`
  ${markIconContainer}
  width: 4rem;
  height: 4rem;

  svg {
    border: none;
    outline: none;
  }
`;
