/** @format */
import maxWidth from "../../config/screen.size";

import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: ${({ direction }) => direction || "row"};
  margin: 0 auto;
  align-items: center;
  width: 110rem;
  position: relative;
  z-index: 30;

  @media only screen and (max-width: ${maxWidth.large}) {
    max-width: 120rem;
  }

  @media only screen and (max-width: ${maxWidth.medium}) {
    width: 100%;
    padding: 0 3rem;
  }

  @media only screen and (max-width: ${maxWidth.small}) {
    &:before {
      content: "";
      width: 100%;
      height: 100.1%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: ${({ theme }) => theme.backgroundColor};
      z-index: -2;
      opacity: 0.9;
      border-right: 0.2px solid rgba(0, 0, 0, 0.9);
      border-left: 0.2px solid rgba(0, 0, 0, 0.9);
    }
  }
`;
