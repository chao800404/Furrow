/** @format */

import styled from "styled-components";
import maxWidth from "../../../config/screen.size";

export const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: ${({ theme }) => theme};

  @media only screen and (max-width: ${maxWidth.small}) {
    display: none;
  }
`;
