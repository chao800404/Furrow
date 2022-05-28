/** @format */

import styled from "styled-components";
import primaryColor from "../../theme/priamry.styles";
import { Link } from "react-router-dom";

export const Logo = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
  span {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: ${primaryColor["logoPointColor"]};
    display: block;
    margin: 0 5px;
  }
`;

export const LinkStyle = styled(Link)`
  text-decoration: none;
  font-size: 2.5rem;
  font-weigth: 1200;
  color: inherit;
`;
