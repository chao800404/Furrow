/** @format */

import styled from "styled-components";
import { motion } from "framer-motion";
import maxWidth from "../../config/screen.size";

export const SignInPageContainer = styled.section`
  min-height: 100vh;
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
  margin: 6rem auto 0 auto;

  @media only screen and (max-width: ${maxWidth.small}) {
    flex-direction: column-reverse;
    margin-top: 0;
  }
`;

export const SignInUpContent = styled(motion.div)`
  width: 100%;
  height: 40rem;
  background-color: ${({ theme }) => theme.color};
  margin-left: 3rem;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 1rem;
  color: ${({ theme }) => theme.backgroundColor};
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
    padding: 2rem 3rem;
    margin-left: 0;
    margin-top: 5rem;

    h1 {
      font-size: 3.5rem;
    }

    p {
      font-size: 1.4rem;
    }
  }
`;

export const SignInSuccess = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  overflow: hidden;
  border-radius: 0.5rem;

  .success-content {
    width: 60%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 5rem;
    height: 100%;

    @media only screen and (max-width: ${maxWidth.small}) {
      width: 100%;
      padding: 0;
    }
  }

  .success-title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
`;
