/** @format */

import styled from "styled-components";
import maxWidth from "../../config/screen.size";

export const PreloadImageContainer = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
  justify-content: center;

  img {
    height: 110%;
    position: absolute;

    @media only screen and (max-width: ${maxWidth.small}) {
      width: unset;
      height: 100%;
    }
  }
`;
