/** @format */

import styled from "styled-components";

export const VirtualContainer = styled.section`
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
      background-color: #161616;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 1rem;
      background-color: #fff;
    }
  }

  .virtual-VR {
    height: 100vh;
    width: 75rem;
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
      background-color: #fff;
      color: #161616;
      margin-top: 2rem;
    }
  }
`;
