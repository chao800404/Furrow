/** @format */

import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const useVideoShouldPlay = () => {
  const videoEl = useRef(null);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    const video = videoEl.current;
    inView ? video.play() : video.pause();
  });

  return { videoEl, ref, inView };
};

export default useVideoShouldPlay;
