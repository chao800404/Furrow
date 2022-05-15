/** @format */

import styled from "styled-components";
import { Link } from "react-router-dom";
import maxWidth from "../../config/screen.size";

export const ShopLink = styled(Link)`
  svg {
    font-size: 2.5rem;
    margin-right: 1rem;
  }

  h3 {
    font-size: 2rem;
  }

  @media only screen and (max-width: ${maxWidth.small}) {
    color: ${({ theme }) => theme.backgroundColor};
    height: 100%;
    display: flex;
    align-items: center;
    svg {
      font-size: 3rem;
      width: 5rem;
      height: 100%;
      padding: 1rem;
      border-right: 1px solid rgba(0, 0, 0, 0.2);
      fill: ${({ theme }) => theme.backgroundColor};
    }
    h3 {
      color: ${({ theme }) => theme.backgroundColor};
      font-size: 1.7rem;
    }
  }
`;
