/** @format */

import React from "react";
import Lottie from "react-lottie-player";

const LottieContainer = ({ lottieJson, style, play, className }) => {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={style}
      className={className}
    />
  );
};

export default LottieContainer;
