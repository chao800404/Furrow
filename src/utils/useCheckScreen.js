/** @format */

import { useState, useEffect } from "react";
import maxWidth from "../config/screen.size";

const useCheckScreenIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [screenWidth, setScreenWidth] = useState(null);

  useEffect(() => {
    const checkMobile = () => {
      setScreenWidth((prev) => (prev = window.innerWidth));
      setIsMobile(
        (prev) => (prev = screenWidth <= maxWidth.small.replace("px", ""))
      );
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [screenWidth]);

  return isMobile;
};

export default useCheckScreenIsMobile;
