/** @format */

import styled from "styled-components";
import { motion } from "framer-motion";
import maxWidth from "../../config/screen.size";

export const CollectionPreviewPageContainer = styled.section`
  padding: 20rem 0;

  @media only screen and (max-width: ${maxWidth.small}) {
    padding: 15rem 0 10rem 0;
  }
`;

export const CollectionPreviewContainer = styled(motion.section)`
  width: 100%;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  min-height: 100vh;
  h2 {
    grid-column: 1 / -1;
    font-size: 5rem;
  }
  h3 {
    color: black;
  }

  @media only screen and (max-width: ${maxWidth.medium}) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media only screen and (max-width: ${maxWidth.small}) {
    display: flex;
    flex-direction: column;
  }
`;
export const CollectionPreviewTitle = styled.div`
  grid-column: 1 / 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: ${maxWidth.small}) {
    grid-template-columns: 1fr;
  }
`;

export const CollectionCartContainer = styled.div`
  grid-column: 1/-1;
  display: grid;
  grid-template-columns: inherit;
  grid-gap: inherit;

  @media only screen and (max-width: ${maxWidth.small}) {
    display: flex;
    overflow-x: scroll;
  }
`;
