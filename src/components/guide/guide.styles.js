/** @format */

import styled from "styled-components";
import { motion } from "framer-motion";

export const PopupGuide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 300;

  .popup-guide-text {
    display: block;
    font-size: 2.5rem;
  }

  .popup-guide-context {
    color: #ffffff;
    font-weight: normal;
  }
`;

export const PopupIcon = styled(motion.div)`
  .popup-guide-icon {
    width: 6rem;
    margin-bottom: 1.5rem;
  }
`;
