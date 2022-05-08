/** @format */

import styled from "styled-components";
import maxWidth from "../../config/screen.size";

export const CheckoutListContainer = styled.div`
  display: inherit;
  grid-template-columns: inherit;
  grid-column: 1 / -1;
  background-color: #fff;
  border-radius: 0.5rem 0.5rem 0 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  grid-column-gap: inherit;
  box-shadow: 0rem 0rem 0.5rem rgba(0, 0, 0, 0.3);
  p {
    color: #161616;
  }
`;

export const CheckoutListTitle = styled.div`
  grid-column: 1 / -1;
  margin-bottom: 2rem;
  h3 {
    font-size: 3.5rem;
    background-color: #f2f2f2;
    color: #161616;
    padding: 1rem 0;
    display: flex;
    align-items: center;
    padding-left: 3.5rem;
    letter-spacing: 0.1rem;

    span {
      font-size: 1.7rem;
      display: block;
      margin-left: 2rem;
      font-weight: 300;
      letter-spacing: 0.1rem;
    }
  }

  @media only screen and (max-width: ${maxWidth.small}) {
    h3 {
      font-size: 2rem;
      span {
        font-size: 1.2rem;
        zoom: 0.9;
      }
    }
  }
`;
