/** @format */

import styled from "styled-components";
import primaryColor from "../../theme/priamry.styles";
import maxWidth from "../../config/screen.size";

export const CheckoutItemContainer = styled.div`
  grid-template-columns: inherit;
  display: inherit;
  grid-column: inherit;
  color: #161616;
  grid-gap: inherit;
  border-bottom: 0.5px solid #9c9c9c;
  margin-bottom: 3rem;

  h3,
  img,
  span,
  input,
  svg {
    text-align: center;
    align-self: center;
  }

  svg,
  input {
    justify-self: center;
  }

  h3 {
    color: inherit;
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    flex-direction: column;

    span {
      font-size: 1.8rem;
      &:last-child {
        font-size: 1rem;
      }
    }
  }
  img {
    width: 100%;
    grid-column: 1 / 2;
  }

  input {
    width: 3.5rem;
    height: 2rem;
    font-weight: 600;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  .price {
    font-size: 1.5rem;
  }
  .total-price {
    font-size: 1.8rem;
    font-weight: 700;
  }
  .checkout-image {
    height: 11rem;
    grid-column: 2 / span 1;
  }

  svg {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: ${maxWidth.mediumAlpha}) {
    .total-price {
      font-size: 1.5rem;
      font-weight: 700;
    }
  }

  @media only screen and (max-width: ${maxWidth.small}) {
    grid-template-columns: inherit;
    grid-column: 1 / -1;
    .price {
      display: none;
    }

    h3 {
      font-size: 1rem;
      font-weight: 500;
      zoom: 0.8;
    }

    .total-price {
      font-size: 1rem;
      font-weight: 800;
    }

    input {
      width: 3rem;
      height: 2rem;
      font-weight: 600;
      font-size: 1rem;
    }
    .checkout-image {
    }
  }
`;

export const CheckoutWarnings = styled.span`
  grid-column: 1/-1;
  align-self: start;
  font-size: 1.5rem;
  grid-row: 1;
  color: ${primaryColor.cursorColor};
`;

export const CheckoutRemoveCover = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 300;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(1rem);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CheckoutRemoveContainer = styled.div`
  width: 25%;
  min-width: 30rem;
  padding: 2rem;
  background-color: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 20rem 5rem 1fr;
  overflow: hidden;

  h3 {
    color: #161616;
    grid-column: 1 /-1;
  }
  .remove-cover-image {
    grid-column: 1 / -1;
    justify-self: center;
    width: 20rem;
    height: 20rem;
    justify-self: center;
  }
`;
