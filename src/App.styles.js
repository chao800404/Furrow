/** @format */

import styled from "styled-components";

export const AppContainer = styled.main`
  overflow: hidden;
  position: relative;

  height: ${({ scrollHidden }) => {
    return scrollHidden ? "100vh" : "auto";
  }};
`;
