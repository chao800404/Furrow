/** @format */
import { motion, useAnimationFrame } from "framer-motion";
import { useRef } from "react";

const BackgroundNoise = () => {
  const ref = useRef();
  useAnimationFrame((t) => {
    ref.current.baseFrequencyX.baseVal = t / 2000;
  });

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 11,
        opacity: 0.2,
        pointerEvents: "none",
      }}
    >
      <motion.svg viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
        <motion.filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            numOctaves="10"
            stitchTiles="stitch"
            baseFrequency="3"
            ref={ref}
          />
        </motion.filter>

        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </motion.svg>
    </div>
  );
};

export default BackgroundNoise;
