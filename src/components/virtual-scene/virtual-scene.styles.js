/** @format */

import styled from "styled-components";
import { Canvas } from "@react-three/fiber";

export const VirtualSceneContainer = styled.div`
  width: 100%;
  height: 50rem;
  margin-top: 2rem;
`;

export const VirtualCanvas = styled(Canvas)`
  width: 100%;
  height: initial;
`;
