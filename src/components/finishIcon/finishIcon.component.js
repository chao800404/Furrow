/** @format */

import Lottie from "react-lottie-player";
import { useState, useEffect } from "react";

const FinishIconAn = ({ height, width, play }) => {
  const [animationData, setAnimationData] = useState();

  useEffect(() => {
    import(
      "../../assets/lottie-json/99551-tick-interaction-to-show-success.json"
    ).then(setAnimationData);
  }, []);

  return (
    <Lottie
      animationData={animationData}
      style={{ width: width, height: height }}
      play={play}
      rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
      loop={false}
    />
  );
};

export default FinishIconAn;
