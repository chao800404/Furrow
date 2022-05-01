/** @format */
import styled, { css } from "styled-components";
import primaryColor from "../../theme/priamry.styles";
import { motion } from "framer-motion";

const DescriptionTemplage = css`
  h2 {
    font-size: 3rem;
    margin-bottom: 3rem;
  }

  p {
    font-size: 2rem;
    letter-spacing: 0.1rem;
    margin-bottom: 3rem;
    font-weight: 300;
  }
`;

export const AboutUsPageContainer = styled.section`
  padding: 15rem 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const AboutStatement = styled(motion.div)`
  width: 100%;
  height: 20rem;
  text-align: center;
  margin-top: 10rem;

  span {
    letter-spacing: 0.1rem;
  }

  h3 {
    font-size: 3rem;
    color: ${primaryColor.cursorColor};
    margin-top: 1rem;
  }
`;

export const AboutStory = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: minmax(35%, 40%) 20% minmax(35%, 40%);
  grid-template-rows: 1fr 3fr 10rem 100rem;
  grid-column-gap: 3rem;
  position: relative;
`;

export const AboutStoryDescription = styled(motion.div)`
  grid-column: 1 / 2;
  grid-row: 1 / 3;

  ${DescriptionTemplage}
`;

export const AboutJointDescription = styled(motion.div)`
  ${DescriptionTemplage}

  position: sticky;
  top: 10rem;
  height: 15rem;

  grid-column: 3 / 4;
  grid-row: 4 / 5;
`;

export const AboutStorySketch = styled(motion.img)`
  grid-column: 2 / -1;
  grid-row: 2 / 3;
  height: 28vmax;
`;

export const AboutStorySketchs = styled(motion.img)`
  grid-column: 1 / 3;
  grid-row: 4 / 5;
  width: 100%;
`;

export const AboutBussiness = styled(motion.h3)`
  font-size: 4rem;
  margin-bottom: 5rem;
`;
