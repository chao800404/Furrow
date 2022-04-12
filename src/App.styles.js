/** @format */

import styled from "styled-components";

export const AppContainer = styled.main`
  position: relative;

  height: ${({ scrollHidden }) => (scrollHidden ? "100vh" : "auto")};
  overflow: ${({ scrollHidden }) => (scrollHidden ? "hidden" : "none")};
`;
