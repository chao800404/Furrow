/** @format */

import React, { useState, useEffect } from "react";
import { PopupGuide, PopupIcon } from "./guide.styles";
import swipeIcon from "../../assets/svg/swipe.svg";
import { ReactSVG } from "react-svg";
import { useMotionValue } from "framer-motion";

const Guide = ({ pointDown }) => {
  const [rotateIcon, setRotateIcon] = useState(false);

  const x = useMotionValue(0);

  useEffect(() => {
    if (pointDown >= 0) return;
    const updateRotate = (latest) => {
      if (latest > 0) {
        setRotateIcon((prev) => (prev = true));
      }
      if (latest < 0) {
        setRotateIcon((prev) => (prev = false));
      }
    };

    const unsubscribeRotate = x.onChange(updateRotate);

    return () => unsubscribeRotate;
  }, [x, pointDown]);
  return (
    <PopupGuide>
      <PopupIcon
        initial={{ x: 0, opacity: 1, rotateY: 0 }}
        transition={{
          repeat: Infinity,
          duration: 3,
          type: "tween",
        }}
        animate={{
          x: [0, 40, 0, -40, 0],
        }}
        style={{ x }}
      >
        <ReactSVG
          className={`popup-guide-icon `}
          src={swipeIcon}
          style={
            rotateIcon
              ? { transform: "rotateY(-189deg)" }
              : { transform: "rotateY(0deg)" }
          }
        />
      </PopupIcon>

      <span className="popup-guide-text">Swipe</span>
      <p className="popup-guide-context">( Swipe to see more details )</p>
    </PopupGuide>
  );
};

export default Guide;
