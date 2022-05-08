/** @format */

import styled from "styled-components";
import maxWidth from "../../config/screen.size";

export const VirtualPageContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 20rem 0 10rem 0;

  .virtaul-side {
    width: 35rem;
    height: 100vh;
    overflow: scroll;
    padding: 0 2rem 0 0;
    -webkit-overflow-scrolling: touch;

    ::-webkit-scrollbar {
      width: 1.2rem;
    }
    ::-webkit-scrollbar-track {
      background-color: ${({ theme }) => theme.backgroundColor};
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 1rem;
      background-color: ${({ theme }) => theme.color};
    }
  }

  .virtual-VR {
    height: auto;
    width: 100%;
    margin-left: 2rem;
    h1 {
      font-size: 5rem;
    }

    p {
      font-size: 2rem;
      font-weight: 300;
      letter-spacing: 0.1rem;
    }
  }

  .virtual-Btn-container {
    width: inherit;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 1rem;
    margin-top: 2rem;

    h3 {
      grid-column: 1 / -1;
      font-size: 4rem;
    }

    button {
      background-color: ${({ theme }) => theme.color};
      color: ${({ theme }) => theme.backgroundColor};
      margin-top: 2rem;
    }
  }

  @media only screen and (max-width: ${maxWidth.mediumBelta}) {
    padding: 10rem 0 10rem 0;
    .virtaul-side {
      width: 100%;
      height: auto;
      padding: 0;
      overflow: auto;
    }
    .virtual-VR {
      margin-left: 0;
    }
  }
`;

export const VirtualContainer = styled.div`
  width: 100%;
  display: flex;

  @media only screen and (max-width: ${maxWidth.mediumBelta}) {
    flex-direction: column-reverse;
  }
`;
