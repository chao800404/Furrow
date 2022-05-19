/** @format */

import styled from "styled-components";
import primaryColor from "../../theme/priamry.styles";

export const NewsCardContainer = styled.div`
  background-color: ${primaryColor.primaryWhite};
  height: 55rem;
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.5);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.3);
`;

export const NewsTextContent = styled.div`
  padding: 3rem 5rem;

  span,
  h3,
  p {
    color: ${primaryColor.primaryBlack};
  }

  h3 {
    font-size: 3rem;
    font-weight: bold;
  }

  span {
    margin-top: 1rem;
    display: block;
    font-size: 1.5rem;
    font-weight: bold;
  }

  p {
    opacity: 0.6;
    font-size: 1.5rem;
    margin-top: 1rem;
  }
`;
