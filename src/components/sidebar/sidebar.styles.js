/** @format */

import styled from "styled-components";
import primaryColor from "../../theme/priamry.styles";

export const SidebarContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;
  background-color: rgba(1, 1, 1, 0.2);
  backdrop-filter: blur(0.3rem);
`;

export const Sidebar = styled.ul`
  background-color: ${primaryColor.cursorColor};
  width: 45vw;
  height: 100%;
  box-shadow: 2rem 0rem 5rem rgba(0, 0, 0, 0.5);
`;
