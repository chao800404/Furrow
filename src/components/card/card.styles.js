/** @format */

import styled, { css } from "styled-components";

const mixin = css`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

export const CardContainer = styled.div`
  width: 100%;
  padding: 4rem 3rem;
  background-color: #ffff;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0.2rem 0.2rem 2rem rgba(0, 0, 0, 0.2);

  p {
    color: #161616;
    font-size: 1rem;
    margin-top: 1rem;
  }
  button {
    margin-top: 3rem;
    letter-spacing: 0.1rem;
  }
`;

export const CardTitle = styled.div`
  width: 100%;
  ${mixin}
  h3 {
    font-size: 2.5rem;
    span {
      font-size: 1.5rem;
      margin-left: 1rem;
      font-weight: 300;
    }
  }
  div {
    font-size: 1rem;
    background-color: black;
    padding: 0.3rem 1rem;
    text-align: center;
    border-radius: 0.3rem;
  }
`;

export const CardFeature = styled.div`
  ${mixin}
  p {
    font-size: 1.5rem;
  }
`;
