/** @format */

import styled, { css } from "styled-components";
import primaryColor from "../../theme/priamry.styles";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const basicCardStyle = css`
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.3);
  border-radius: 1rem;
  background-color: ${primaryColor.primaryWhite};
  overflow: hidden;
  position: relative;
`;

export const NewsCardContainer = styled(motion.div)`
  height: 55rem;
  ${basicCardStyle}
  z-index:20;
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
`;

export const NewsCardLink = styled(Link)`
  width: 4rem;
  height: 4rem;
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  border: 1px solid #161616;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #161616;

  svg {
    width: 80%;
    height: 80%;
  }

  &:hover {
    background-color: #161616;
    transition: all 0.2s ease-in-out;
    color: #fff;
    border: none;
  }
`;
