/** @format */

import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  height: 100%;
  align-items: center;
  width: 110rem;

  @media only screen and (max-width: 1450px) {
    max-width: 100rem;
  }

  @media only screen and (max-width: 1200px) {
    max-width: 80rem;
  }

  @media only screen and (max-width: 1000px) {
    max-width: 80rem;
  }
  @media only screen and (max-width: 850px) {
    width: 100%;
    padding: 0 5rem;
  }
`;
