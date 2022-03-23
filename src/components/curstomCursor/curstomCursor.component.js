/** @format */

import { Cursor } from "./curstomCursor.styles";
import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";

import primaryColor from "../../theme/priamry.styles";

const CurstomCursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 400,
    y: 400,
  });

  const onMouseMove = (event) => {
    const { clientX: x, clientY: y } = event;
    setMousePosition({ x, y });
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  const cursorType = useSelector(
    ({ cursor: { toggleHovered } }) => toggleHovered
  );

  const variants = {
    onHover: {
      scale: 1.5,
      x: "-50%",
      y: "-50%",
      border: `4px solid ${primaryColor.cursorColor}`,
    },
    unHover: {
      scale: 1,
      x: "-50%",
      y: "-50%",
    },
  };

  return (
    <>
      <Cursor
        animate={cursorType ? "onHover" : "unHover"}
        variants={variants}
        mousepositions={mousePosition}
        className={cursorType ? "hovered" : ""}
      />
    </>
  );
};

export default CurstomCursor;
