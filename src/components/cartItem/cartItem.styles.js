/** @format */

import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  border-top: 1px solid #888;
  border-bottom: 1px solid #888;
  color: #161616;
  grid-column-gap: 0.5rem;
  padding: 0.5rem 0;
  position: relative;

  img {
    flex: 1;
    height: 100%;
    grid-column: 1/ 2;
    width: 8rem;
    grid-row: 1/ -1;
  }
  h3,
  span {
    color: #161616;
    font-weight: 700;
    display: block;
  }
  span {
    font-size: 1.5rem;
  }

  .CartItem-cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: linear-gradient(to bottom, #fff 35%, transparent);
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1.5fr;
    p {
      grid-row: 1 / 2;
      font-size: 1.2rem;
      width: 100%;
      align-self: center;
    }
    button {
      font-size: 1rem;
      width: 85%;
      letter-spacing: 0.2rem;
      align-self: center;
      justify-self: center;
      grid-row: 2 / 3;

      &:nth-of-type(1) {
        background-color: rgba(255, 255, 255);
        border: 1px solid rgba(0, 0, 0, 0.5);
        color: #161616;
      }
    }
  }

  .CartItem-title {
    grid-column: 2 / -1;
    font-size: 1.3rem;
  }
  .CartItem-price {
    grid-column: 2/ 4;
  }

  .CartItem_quantity {
    width: 4rem;
    height: 2.5rem;
    text-align: center;
    grid-column: 2/ 3;
    grid-row: 3/4;
    display: flex;
    align-items: center;

    span {
      display: block;
      font-weight: 300;
      font-size: 1.2rem;
      letter-spacing: 0.1rem;
    }

    input {
      width: 4rem;
      height: 2rem;
      outline: none;
      margin-left: 0.5rem;
      text-align: center;
      margin-top: 0.2rem;
    }

    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }
  }
  .CartItem-title,
  .CartItem-price,
  .CartItem-color,
  .CartItem_quantity {
    align-self: center;
  }

  &:not(:first-child) {
    margin-top: 1rem;
  }
`;
