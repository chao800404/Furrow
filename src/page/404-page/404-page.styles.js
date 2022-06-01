/** @format */

import styled from "styled-components";
import maxWidth from "../../config/screen.size";

export const NotFoundContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  padding: 20rem 0 20rem 0;

  @media only screen and (max-width: ${maxWidth.small}) {
    padding: 12rem 0 10rem 0;
  }
`;

export const NotFoundContent = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  grid-template-columns: minmax(0.5rem, 2rem) repeat(2, 1fr) minmax(
      0.5rem,
      2rem
    );
  background-color: ${({ theme }) => theme.color};
  grid-template-rows: minmax(0.5rem, 2rem) repeat(2, 1fr) minmax(0.5rem, 2rem);
  grid-gap: 1rem;

  h1 {
    font-size: calc(6vw + 6rem);
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: -1rem;
    grid-column: 2 / span 2;
    grid-row: 2 / span 1;
    align-self: center;
    height: 100%;
    background-color: ${({ theme }) => theme.backgroundColor};
  }
  h2 {
    font-size: 20rem;
    grid-row: 3 / span 1;
    grid-column: 2 / span 1;
    text-align: center;
    height: 100%;
    background-color: ${({ theme }) => theme.backgroundColor};
  }

  .not-fount-vd {
    grid-column: 3 / span 1;
    grid-row: 3 / span 1;
    height: 100%;
  }

  @media only screen and (max-width: ${maxWidth.small}) {
    grid-template-columns: minmax(0.5rem, 1rem) 1fr minmax(0.5rem, 1rem);
    grid-template-rows: minmax(0.5rem, 1rem) repeat(3, 1fr) minmax(0.5rem, 1rem);

    h1 {
      grid-column: 2 / span 1;
      font-size: 12vw;
      letter-spacing: -0.5rem;
    }

    h2 {
      grid-column: 2 / span 1;
    }

    .not-fount-vd {
      grid-column: 2 / span 1;
      grid-row: 4 / span 1;
    }
  }
`;
