/** @format */
import styled, { css } from "styled-components";
import primaryColor from "../../theme/priamry.styles";
import { motion } from "framer-motion";
import maxWidth from "../../config/screen.size";

const DescriptionTemplage = css`
  h2 {
    font-size: 3rem;
    margin-bottom: 3rem;

    @media only screen and (max-width: ${maxWidth.mediumBelta}) {
      margin-bottom: 2rem;
    }
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

  @media only screen and (max-width: ${maxWidth.mediumBelta}) {
    padding: 10rem 0;
  }
`;

export const AboutStoryContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const AboutStatement = styled.div`
  width: 100%;
  text-align: center;
  padding: 10rem 3rem 20rem 3rem;

  span {
    letter-spacing: 0.1rem;
  }

  h3 {
    font-size: 3rem;
    color: ${primaryColor.cursorColor};
    margin-top: 1rem;
  }

  @media only screen and (max-width: ${maxWidth.mediumBelta}) {
    padding: 10rem 3rem 10rem 3rem;
  }
`;

export const AboutStory = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: minmax(35%, 40%) 20% minmax(35%, 40%);
  grid-template-rows: 1fr 3fr 10rem 100rem;
  grid-column-gap: 3rem;
  position: relative;

  @media only screen and (max-width: ${maxWidth.mediumBelta}) {
    grid-row-gap: 2rem;
    grid-template-rows: auto 2fr 5rem auto;
    grid-column-gap: 0;
  }
`;

export const AboutStoryDescription = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 3;

  ${DescriptionTemplage}

  @media only screen and (max-width: ${maxWidth.mediumBelta}) {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
  }
`;

export const AboutJointDescription = styled.div`
  ${DescriptionTemplage}

  position: sticky;
  top: 10rem;
  height: 30rem;

  grid-column: 3 / 4;
  grid-row: 4 / 5;
  overflow: hidden;

  @media only screen and (max-width: ${maxWidth.mediumBelta}) {
    grid-column: 1 / -1;
    grid-row: 4 / 5;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 1rem;
    height: auto;
    align-self: start;
    height: 20rem;
  }
  @media only screen and (max-width: ${maxWidth.small}) {
    height: 18rem;
  }
`;

export const AboutStorySketch = styled.div`
  grid-column: 2 / -1;
  grid-row: 2 / 3;
  width: 56vw;
  overflow: hidden;

  img {
    width: 110%;
  }

  @media only screen and (max-width: ${maxWidth.mediumBelta}) {
    grid-column: 1 / -1;
    grid-row: 1 / 2;
    width: 70vw;
    justify-self: end;
  }
`;

export const AboutStorySketchs = styled(motion.img)`
  grid-column: 1 / 3;
  grid-row: 4 / 5;
  width: 100%;

  @media only screen and (max-width: ${maxWidth.mediumBelta}) {
    grid-column: 1 / -1;
    grid-row: 4 / 5;
  }
`;

export const AboutBussiness = styled(motion.h3)`
  font-size: 4rem;
  margin-bottom: 5rem;
  @media only screen and (max-width: ${maxWidth.mediumBelta}) {
    margin-top: 5rem;
  }
`;
