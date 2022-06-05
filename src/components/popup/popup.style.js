/** @format */

import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import primaryColor from "../../theme/priamry.styles";
import maxWidth from "../../config/screen.size";

const basicAfter = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export const PopupContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  backdrop-filter: blur(1rem);
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  overflow: scroll;
  ul {
    justify-self: center;
    width: 100rem;
    transform: translateY(-10vw);
    h3 {
      font-size: 5rem;
    }
    li {
      font-size: 2rem;
      transform: translateX(3rem);
    }
  }
  @media only screen and (max-width: ${maxWidth.mediumAlpha}) {
    ul {
      width: 60rem;
      margin-top: 0;
      height: auto;
      h3 {
        font-size: 3.5rem;
      }
      li {
        font-size: 1.2rem;
        transform: translateX(1.2rem);
      }
    }
  }
  @media only screen and (max-width: ${maxWidth.small}) {
    ul {
      width: 90%;
    }
  }
`;

export const PopupBoxContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25rem 0;
  @media only screen and (max-width: ${maxWidth.small}) {
    padding: 10rem 0;
  }
`;

export const PopupBox = styled(motion.div)`
  width: 100rem;
  min-height: 35rem;
  padding: 2em 5rem;
  background-color: #fff;
  align-self: center;
  justify-self: center;
  border-radius: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: relative;
  grid-gap: 0 5rem;

  &.popup-guide-container {
    &:after {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      background-color: rgba(0, 0, 0, 0.8);
      z-index: 30;
    }
  }

  div.popup-glasses {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .popup_close {
    width: 5rem;
    height: 5rem;
    position: absolute;
    right: 0;
    top: -6rem;
    fill: #fff;
    pointer-events: none;
  }
  h3,
  p {
    color: #161616;
  }
  h3 {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 2rem;
  }
  p {
    font-size: 1.5rem;
    font-weight: 500;
  }
  img {
    width: 100%;
    flex: 1;
  }

  .popup-text_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #111;
    padding-bottom: 1rem;
  }
  .popup-canvas {
    align-self: center;
    width: 100%;
    height: 100%;
  }
  .popup_price {
    color: #161616;
    font-size: 2.5rem;
    text-align: end;
  }
  .popup_warm {
    color: ${primaryColor.cursorColor};
    font-size: 1.5rem;
    display: block;
    width: 15rem;
    margin-top: 1rem;
  }
  .popup_calculator {
    display: flex;
    align-items: center;
    height: 3rem;
    margin-top: 1rem;
    width: 100%;
    input {
      display: flex;
      text-align: center;
      height: 100%;
      width: 5rem;
      border: 1px solid #161616;
    }
    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }
    svg {
      fill: #161616;
      width: 4em;
      padding: 0.5rem;
      height: 100%;
      border-top: 1px solid #161616;
      border-bottom: 1px solid #161616;
      &:nth-child(1) {
        border-radius: 0.5rem 0 0 0.5rem;
        border-left: 1px solid #161616;
      }
      &:nth-child(3) {
        border-radius: 0 0.5rem 0.5rem 0;
        border-right: 1px solid #161616;
      }
    }
  }
  .popup_calculator-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .popup_calculator_container {
    transform: translateY(-2rem);
    width: 100%;
  }
  .color_container {
    display: flex;
    padding-left: 1rem;
    span {
      &:not(:last-child) {
        margin-right: 1rem;
      }
    }
  }
  .button_container {
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-column-gap: 1rem;
    margin-top: 3rem;
    position: relative;
  }

  .button_electrochromic_container {
    position: relative;
    button {
      height: 100%;
    }
  }

  .button-electrochromic-guide {
    ${basicAfter}
    border: 2px solid #ffffff;
    z-index: 300;

    &:after {
      content: "";
      position: absolute;
      width: 2px;
      height: 2rem;
      top: -2rem;
      left: 50%;
      transform: translateX(-50%);
      z-index: 30;
      background-color: #ffffff;
    }
    &:before {
      content: "Click the button to change lenses color";
      position: absolute;
      width: 25rem;
      height: 2px;
      top: -9rem;
      text-align: center;
      left: 50%;
      transform: translateX(-50%);
      font-size: 2rem;

      @media only screen and (max-width: ${maxWidth.medium}) {
        text-align: left;
        transform: translateX(0);
        left: 0;
      }
    }
  }

  @media only screen and (max-width: ${maxWidth.mediumAlpha}) {
    grid-template-columns: 1fr;
    grid-template-rows: 30rem 1fr;
    width: 60rem;
    min-height: 60rem;
    h3 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    .popup_calculator_container {
      transform: unset;
      width: 100%;
      display: flex;
      align-items: center;
    }
    .popup_calculator {
      margin-top: 0;
    }
    .popup_calculator-item {
      margin-left: 2rem;
    }
  }
  @media only screen and (max-width: ${maxWidth.small}) {
    width: 90%;
    padding: 0;
    h3 {
      font-size: 3rem;
    }
    .popup_calculator_container {
      margin-top: 2rem;
      justify-content: space-between;
    }
    .popup_price {
      margin-top: 2rem;
    }
  }
`;
export const PopupForm = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: ${maxWidth.small}) {
    padding: 0 4rem 4rem 4rem;
  }
`;

export const PopupCover = styled.div`
  ${basicAfter}
  z-index:500;
`;
