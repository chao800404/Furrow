/** @format */

import styled from "styled-components";

export const ColorBoxContainer = styled.span`
  &.active {
    position: relative;
    &:after {
      content: "";
      border-radius: 50%;
      width: 140%;
      height: 140%;
      border: 2px solid #777;
      z-index: 2;
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(-14%, -14%);
    }
  }
`;
