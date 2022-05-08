/** @format */

import styled from "styled-components";
import maxWidth from "../../config/screen.size";

export const VirtualSideCt = styled.div`
  width: inherit;

  &:not(:first-child) {
    margin-top: 3rem;
  }

  @media only screen and (max-width: ${maxWidth.mediumBelta}) {
    display: flex;
    width: auto;
    &:not(:first-child) {
      margin-top: 0;
    }
    gap: 1rem;

    .VirtualTitle {
      text-align: center;
      display: flex;
      align-items: center;
    }
  }
`;
