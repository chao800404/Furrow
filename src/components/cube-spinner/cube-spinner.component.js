/** @format */

import Lottie from "react-lottie-player";
import cubeLoader from "../../assets/lottie-json/cube-loading.json";
import { CubeSpinnerContainer } from "./cube-spinner.styles";

export default function CubeSpinner({ style }) {
  return (
    <CubeSpinnerContainer style={style}>
      <Lottie
        loop
        animationData={cubeLoader}
        play
        style={{ width: 150, height: 150 }}
      />
    </CubeSpinnerContainer>
  );
}
