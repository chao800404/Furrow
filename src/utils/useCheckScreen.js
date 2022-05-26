/** @format */

import maxWidth from "../config/screen.size";
import useWinowSize from "./useWindowSize";
import { useState, useEffect } from "react";

const useCheckScreenIsMobile = () => {
  const { width } = useWinowSize();
  const [isMobile, setIsMobile] = useState(
    maxWidth.small.replace("px", "") >= width
  );

  useEffect(() => {
    setIsMobile(
      maxWidth.small.replace("px", "") >= width &&
        /Mobi|Android|iPhone/i.test(navigator.userAgent)
    );
  }, [width]);

  return isMobile;
};

export default useCheckScreenIsMobile;
