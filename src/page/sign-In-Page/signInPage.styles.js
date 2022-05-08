/** @format */

import styled from "styled-components";
import { motion } from "framer-motion";
import maxWidth from "../../config/screen.size";

export const SignInPageContainer = styled.section`
  min-height: 100vmax;
  padding: 20rem 0;
  @media only screen and (max-width: ${maxWidth.small}) {
    padding: 15rem 0 5rem 0;
  }
`;

export const SignInUpContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 6rem;

  @media only screen and (max-width: ${maxWidth.small}) {
    flex-direction: column-reverse;
    margin-top: 0;
  }
`;

export const SignInUpContent = styled(motion.div)`
  width: 100%;
  height: 40rem;
  background-color: #fff;
  margin-left: 3rem;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 1rem;
  color: #161616;
  display: flex;
  flex-direction: column;

  p,
  h1 {
    color: inherit;
  }
  h1 {
    font-size: 5rem;
  }

  @media only screen and (max-width: ${maxWidth.small}) {
    height: auto;
    padding: 2rem;
    margin-left: 0;

    h1 {
      font-size: 3.5rem;
    }

    p {
      font-size: 1.4rem;
    }
  }
`;
