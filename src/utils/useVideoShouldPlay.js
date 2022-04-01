/** @format */

import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const useVideoShouldPlay = () => {
  const videoEl = useRef(null);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    setTimeout(() => {
      const video = videoEl.current;
      video.defaultMuted = true;
      inView ? video.play() : video.pause();
    }, 0);
  });

  return { videoEl, ref, inView };
};

export default useVideoShouldPlay;
