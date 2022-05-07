/** @format */
import styled from "styled-components";
import primaryColor from "../../../theme/priamry.styles";
import { motion } from "framer-motion";
import maxWidth from "../../../config/screen.size";

export const HomeArticleSide = styled(motion.article)`
  grid-column: 1 / 2;
  height: 35rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: ${maxWidth.small}) {
    grid-row: 2 / 3;
    height: auto;
  }

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
  }
`;

export const HomeArticleDownContainer = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;

  .svgIcon {
    fill: ${(props) => props.theme.color};
    width: 10rem;
    height: 10rem;
    fontsize: 5rem;
  }

  @media only screen and (max-width: ${maxWidth.small}) {
    height: 10rem;
    margin-top: 5rem;

    .svgIcon {
      width: 9rem;
      height: 9rem;
    }
  }
`;
