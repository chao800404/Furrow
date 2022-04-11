/** @format */

import styled from "styled-components";
import { motion } from "framer-motion";
import primaryColor from "../../theme/priamry.styles";

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
  overflow-y: scroll;

  ul {
    justify-self: center;
    width: 50%;
    transform: translateY(-60%);

    h3 {
      font-size: 5rem;
      margin-bottom: 1.5rem;
    }

    li {
      font-size: 2rem;
      transform: translateX(3rem);
    }
  }
  button {
    margin-top: 3rem;
  }
`;

export const PopupBoxContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PopupBox = styled(motion.div)`
  width: 50%;
  min-width: 40rem;
  padding: 2em;
  background-color: #fff;
  align-self: center;
  justify-self: center;
  border-radius: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  grid-gap: 1rem 5rem;

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
    font-weight: 500;
    letter-spacing: 0.2rem;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.5rem;
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
  }
  .popup-image {
    align-self: center;
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
      border: 1px solid #161616;
      width: 1.8em;
      padding: 0.5rem;
      height: 100%;

      &:nth-child(1) {
        border-radius: 0.5rem 0 0 0.5rem;
      }
      &:nth-child(3) {
        border-radius: 0 0.5rem 0.5rem 0;
      }
    }
  }

  .popup_calculator-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .color_container {
    display: flex;
    padding-bottom: 1rem;
  }
  .color_option {
    width: 2rem;
    height: 2rem;
    display: block;
    border-radius: 50%;

    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
`;
export const PopupForm = styled.div`
  flex: 1;
`;
