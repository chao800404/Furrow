/** @format */

import Lottie from "react-lottie-player";
import cubeLoader from "../../assets/lottie-json/cube-loading.json";
import { CubeSpinnerContainer } from "./cube-spinner.styles";
import useCheckScreenIsMobile from "../../utils/useCheckScreen";

const spinnerSize = {
  LARGER: 150,
  SMALL: 100,
};

export default function CubeSpinner({ style }) {
  const isMobile = useCheckScreenIsMobile();

  return (
    <CubeSpinnerContainer style={style}>
      <Lottie
        loop
        animationData={cubeLoader}
        play
        style={
          isMobile
            ? { width: spinnerSize.SMALL, height: spinnerSize.SMALL }
            : { width: spinnerSize.LARGER, height: spinnerSize.LARGER }
        }
      />
    </CubeSpinnerContainer>
  );
}
