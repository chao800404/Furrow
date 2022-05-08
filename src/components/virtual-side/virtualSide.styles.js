/** @format */

import styled from "styled-components";
import maxWidth from "../../config/screen.size";

export const VirtualSideContainer = styled.div`
  width: 100%;

  @media only screen and (max-width: ${maxWidth.mediumBelta}) {
    display: flex;
    overflow-x: scroll;
    align-items: center;
    margin-top: 2rem;
    padding: 2rem 0;
  }
`;
