/** @format */

import styled from "styled-components";
import maxWidth from "../../config/screen.size";

export const NewsPageContainer = styled.section`
  min-height: 100vh;
  padding: 20rem 0 10rem 0;
`;

export const NewsPageLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 50rem;
  gap: 2rem;

  @media only screen and (max-width: ${maxWidth.mediumAlpha}) {
    grid-template-columns: 1.5fr 1fr;
  }
  @media only screen and (max-width: ${maxWidth.small}) {
    grid-template-columns: 1fr 1fr;
    gap: 0;
  }
`;

export const NewsTitle = styled.h1`
  grid-column: 1 /-1;
  font-size: 10rem;

  @media only screen and (max-width: ${maxWidth.small}) {
    grid-column: 1 /2;
  }
`;

export const NewCardContainer = styled.div`
  grid-column: 1 / span 1;

  @media only screen and (max-width: ${maxWidth.small}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    overflow: hidden;
    position: relative;
    grid-column: 1 / -1;
  }
  @media only screen and (max-width: ${maxWidth.smaller}) {
    grid-template-columns: 1fr;
  }
`;

export const NewsSide = styled.div`
  width: 100%;
  text-align: end;
  align-self: start;
  position: sticky;
  top: calc(50% - 35rem);

  .date-select {
    width: 15rem;
    font-weight: 700;
    text-align: center;
    margin-left: auto;

    div {
      color: #161616;
    }
  }

  @media only screen and (max-width: ${maxWidth.small}) {
    grid-row: 1 / span1;
    position: static;
    grid-column: 2 / span 1;
    align-self: center;

    .date-select {
      div {
        z-index: 50;
      }
    }
  }
`;

export const NewsSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 5rem;

  @media only screen and (max-width: ${maxWidth.small}) {
    display: none;
  }
`;

export const NewsSideItem = styled.div`
  width: 30rem;
  margin-left: auto;
  h4 {
    font-size: 1.8rem;
  }

  span {
    font-size: 1.2rem;
    margin-top: 1rem;
    display: block;
  }
`;

export const NewsHiddenPostBar = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  background: ${({ theme }) =>
    `linear-gradient(to top, ${theme.backgroundColor} 10%, transparent)`};
  z-index: 30;
  height: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: 1/ -1;
`;
