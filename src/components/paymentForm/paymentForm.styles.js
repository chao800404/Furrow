/** @format */

import styled from "styled-components";

export const PaymentFromContainer = styled.div`
  height: 30rem;
  h3,
  span,
  label {
    color: #161616;
  }
  h3 {
    font-size: 1.8rem;
  }

  input {
    font-size: 1.2rem;
    padding: 1rem;
    margin-bottom: 1.5rem;
    width: 100%;
  }

  #fullName {
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
  }

  #firstName {
    width: 50%;
  }

  #secondName {
    width: 50%;
  }
  .form-title {
    font-size: 2rem;
    width: 100%;
    position: absolute;
    background-color: #f2f2f2;
    top: 0;
    left: 0;
    padding: 1rem;
    text-align: center;
  }

  input:-webkit-autofill {
    background-color: transparent !important;
    -webkit-box-shadow: 0 0 0 50px #fff inset;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  .ShippingDestination {
    font-size: 3.8rem;
    line-height: 5rem;
  }

  .total-price {
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
`;
