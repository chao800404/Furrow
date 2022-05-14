/** @format */

import Lottie from "react-lottie-player";
import cubeLoader from "../../assets/lottie-json/cube-loading.json";
import { CubeSpinnerContainer } from "./cube-spinner.styles";
import maxWidth from "../../config/screen.size";
import useWinowSize from "../../utils/useWindowSize";

const spinnerSize = {
  LARGER: 150,
  SMALL: 100,
};

export default function CubeSpinner({ style }) {
  const { width } = useWinowSize();
  const isMobile = maxWidth.small.replace("px", "") >= width;

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
