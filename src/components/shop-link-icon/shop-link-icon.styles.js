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
    color: ${({ theme }) => theme.color};
    display: flex;
    align-items: center;
    svg {
      width: 4.5rem;
      height: 100%;
      padding: 1rem;
      fill: ${({ theme }) => theme.color};
      margin-right: 0;
    }
    h3 {
      font-size: 1.8rem;
      margin-right: 1.5rem;
    }
  }
`;
