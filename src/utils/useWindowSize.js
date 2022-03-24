/** @format */

import { useEffect, useState } from "react";

export default function useWinowSize(callback) {
  const getSize = () => ({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    const events = ["load", "resize"];
    const handleResize = () => {
      setWindowSize(getSize());
    };

    events.forEach((event) => window.addEventListener(event, handleResize));

    return () =>
      events.forEach((event) =>
        window.removeEventListener(event, handleResize)
      );
  }, [callback]);

  return windowSize;
}
