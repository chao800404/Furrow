/** @format */

import styled from "styled-components";
import { motion } from "framer-motion";

export const SignInContainer = styled(motion.form)`
  display: grid;
  width: 60rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows:
    [express-start] 5rem
    [express-end expressBtn-start] 10rem
    [expressBtn-end singInBtn-start] 7rem
    [singInBtn-end email-start] 7rem
    [email-end password-start] 8rem
    [password-end submitBtn-start] 6rem
    [submitBtn-end forgotBtn-start] 5rem
    [forgotBtn-end];
  font-family: "Roboto", sans-serif;
  grid-column-gap: 1rem;

  h4 {
    grid-column: 1 / -1;
    font-size: 1.5rem;
    grid-row: express-start / express-end;
    align-self: end;
    font-weight: 300;
    letter-spacing: 0.1rem;
  }

  input[type="email"] {
    grid-row: email-start / email-end;
    border-radius: 1rem 1rem 0 0;

    &:active,
    &:focus {
      background: #fff;
    }
  }
  input[type="password"] {
    grid-row: password-start / password-end;
    margin-top: 1rem;
  }

  input:-webkit-autofill {
    background-color: transparent !important;
    -webkit-box-shadow: 0 0 0 50px #fff inset;
  }
  p {
    text-align: end;
    font-size: 1.5rem;
    letter-spacing: 0.2rem;
    align-self: center;
    text-decoration: underline;
  }

  input[type="email"],
  input[type="password"],
  h4,
  p,
  .expressBtn {
    grid-column: 1 / -1;
    font-family: "Roboto", sans-serif;
  }
  input {
    outline: none;
    font-size: 1.5rem;
    text-align: start;
    padding-left: 2rem;
    border: none;
  }

  .expressBtn {
    display: flex;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    margin-bottom: 1rem;
    gap: 1rem;
  }
`;

export const SignInOutOption = styled(motion.div)`
  grid-column: 1 / -1;
  grid-row: singInBtn-start / singInBtn-end;
  display: flex;
  gap: 1.5rem;
  position: relative;

  .signInOutBtn {
    align-self: center;
    justify-self: center;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    font-weight: 700;
    margin-top: 1.5rem;
    z-index: 20;
  }
`;

export const SignInOutBtnBg = styled(motion.span)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  margin-top: 1.5rem;
  width: calc(50% - 0.75rem);
  background-color: #fff;
  border-radius: 0.5rem 0.5rem 0 0;
  z-index: 10;
`;
