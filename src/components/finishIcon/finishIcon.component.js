/** @format */

import Lottie from "react-lottie";
import * as finishIconAn from "../../assets/lottie-json/99551-tick-interaction-to-show-success.json";

const FinishIconAn = ({ height, width, isStopped, isPaused }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: finishIconAn,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Lottie
      options={defaultOptions}
      height={height}
      width={width}
      isStopped={isStopped}
      isPaused={isPaused}
    />
  );
};

export default FinishIconAn;
