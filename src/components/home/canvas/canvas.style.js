/** @format */

import styled from "styled-components";

export const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  display: block;
  background-color: ${({ theme }) => theme};
`;
