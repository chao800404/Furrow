/** @format */

import styled from "styled-components";
import maxWidth from "../../config/screen.size";

export const PreloadImageContainer = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
  justify-content: center;

  img {
    height: 100%;
    position: absolute;
    top: 50%;
    width: 100%;

    transform: translateY(-50%);

    @media only screen and (max-width: ${maxWidth.mediumAlpha}) {
      width: unset;
      height: 100%;
    }
  }
`;
