/** @format */
import styled from "styled-components";
import primaryColor from "../../../theme/priamry.styles";
import { motion } from "framer-motion";

export const HomeArticleSide = styled(motion.article)`
  grid-column: 1 / 2;
  height: 35rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-size: 4.5rem;
    color: ${primaryColor.cursorColor};
  }
  h3 {
    margin-top: 2rem;
  }

  p {
    margin-top: 1rem;
    font-size: 2rem;
    letter-spacing: 0.2rem;
  }
`;

export const HomeArticleDownContainer = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
`;