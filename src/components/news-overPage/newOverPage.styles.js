/** @format */

import styled from "styled-components";
import primaryColor from "../../theme/priamry.styles";
import { motion } from "framer-motion";

export const NewsOverViewPageContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  backdrop-filter: blur(1rem);
  display: flex;
  justify-content: center;
  align-items: center;

  h1,
  p,
  li,
  span {
    color: ${primaryColor.primaryBlack};
  }

  .youtubeVideo {
    width: 100%;
  }

  img {
    width: 100%;
  }
`;

export const NewsOverViewBox = styled(motion.div)`
  max-width: 70rem;
  height: 95%;
  background-color: #ffff;
  border-radius: 1rem;
  overflow: scroll;
  display: inherit;
  align-items: inherit;
  flex-direction: column;
  box-shadow: 1rem 1rem 5rem rgba(0, 0, 0, 1);
  padding: 0 0 5rem 0;
  position: relative;
  display: grid;
  grid-template-rows: auto;

  h1,
  h3 {
    padding: 3rem 0 0 0;
    font-weight: 800;
    text-transform: uppercase;
  }
  h1 {
    font-size: 4rem;
  }
  h3 {
    font-size: 2.2rem;
  }
  p,
  li {
    font-size: 1.5rem;
    padding: 1rem 0;
  }
  span {
    font-size: 1.3rem;
  }
  li {
    margin-left: 1.5rem;
  }
`;

export const NewsBanner = styled.div`
  width: 100%;
  grid-row: 1 / span 1;
  grid-column: 1 / span 1;
`;

export const NewsTextTable = styled.div`
  width: 80%;
  margin: auto;
`;

export const NewsCloseBtn = styled(motion.button)`
  width: 3.5rem;
  height: 3.5rem;
  padding: 0;
  position: sticky;
  right: 1rem;
  top: 1rem;
  z-index: 1;
  border-radius: 50%;
  background-color: transparent;
  border: none;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
  color: ${primaryColor.cursorColor};
  grid-row: 1 / span 1;
  grid-column: 1 / span 1;
  z-index: 100;
  align-self: start;
  justify-self: end;

  svg {
    width: 100%;
    height: 100%;
    stroke-width: 1rem;
    transform: scale(1.2);
  }
`;
