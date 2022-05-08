/** @format */

import { motion } from "framer-motion";
import styled from "styled-components";
import maxWidth from "../../config/screen.size";

export const CollectionOverViewPageContainer = styled.section`
  padding-top: 25rem;
  padding-bottom: 10rem;
  position: relative;
  min-height: 100vh;

  @media only screen and (max-width: ${maxWidth.medium}) {
    padding-top: 15rem;
  }
`;

export const CollectionOverViewContainer = styled(motion.section)`
  display: flex;
  flex-direction: column;
  width: 100%;

  h1 {
    font-size: 15rem;
    margin-top: 5rem;
  }

  @media only screen and (max-width: ${maxWidth.medium}) {
    h1 {
      font-size: 10rem;
    }
  }

  @media only screen and (max-width: ${maxWidth.mediumBelta}) {
    h1 {
      margin-top: 0;
    }
  }
  @media only screen and (max-width: ${maxWidth.small}) {
    h1 {
      font-size: 7rem;
    }
  }
`;

export const CollectionOverViewLinkBtn = styled.div`
  height: auto;
  margin-bottom: 5rem;
  gap: 1rem;
  display: flex;
  flex-direction: wrap;
  flex-wrap: wrap;
`;

export const OverViewCardContainer = styled(motion.div)`
  width: 100%;
  .over-view-cart-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 4rem 2rem;
  }

  @media only screen and (max-width: ${maxWidth.mediumBelta}) {
    height: 35rem;
    overflow-x: scroll;
    padding: 1.5rem 1rem;
    display: flex;

    .over-view-cart-container {
      grid-auto-flow: column;
    }
  }
`;
