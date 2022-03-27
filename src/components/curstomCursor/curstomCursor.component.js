/** @format */

import { Cursor } from "./curstomCursor.styles";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCursorHover } from "../../redux/cursor/cursor.select";
import { sidebarStauts } from "../../redux/sidebar/sidebar.select";
import { selectThemeStyle } from "../../redux/theme/theme.select";

import primaryColor from "../../theme/priamry.styles";

const CurstomCursor = () => {
  const status = useSelector(sidebarStauts);
  const theme = useSelector(selectThemeStyle);
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

  const cursorType = useSelector(selectCursorHover);

  const variants = {
    onHover: {
      scale: 1.5,
      x: "-50%",
      y: "-50%",
      border: `3px solid ${primaryColor.cursorColor}`,
    },
    unHover: {
      scale: 1,
      x: "-50%",
      y: "-50%",
    },
    sidebarOpen: {
      backgroundColor: theme.backgroundColor,
      scale: 1.5,
    },
  };

  return (
    <>
      <Cursor
        animate={
          cursorType ? "onHover" : "unHover" && status ? "sidebarOpen" : ""
        }
        variants={variants}
        mousepositions={mousePosition}
        className={cursorType ? "hovered" : ""}
      />
    </>
  );
};

export default CurstomCursor;
