/** @format */

import styled from "styled-components";

export const PaymentContainer = styled.form`
  width: 100%;
  padding: 4rem;
  display: flex;
  flex-direction: column;
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
  }

  #full-name {
    display: flex;
    gap: 1rem;
  }

  #first-Name {
    width: 30%;
  }

  #second-Name {
    width: 70%;
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

  p {
    font-size: 1.5rem;
    color: #161616;
    margin-top: 1rem;
  }

  span {
    font-size: 5rem;
    font-weight: bold;
    margin-bottom: 1rem;
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
`;

export const PaymentStep = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  align-items: center;
  padding: 0 1rem;
  margin-top: 3rem;
  .form-step {
    width: 3rem;
    height: 3rem;
    font-size: 1.2rem;
    border-radius: 50%;
    background-color: #d1d1d1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 400;
  }
  .form-path {
    height: 1px;
    width: 4rem;
    background-color: #d1d1d1;
    display: block;
  }
  .form-step-1 {
  }
`;
