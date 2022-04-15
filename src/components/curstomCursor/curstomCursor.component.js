/** @format */

import { Cursor } from "./curstomCursor.styles";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCursorHover } from "../../redux/cursor/cursor.select";
import { sidebarStauts } from "../../redux/sidebar/sidebar.select";
import { selectThemeStyle } from "../../redux/theme/theme.select";

// import primaryColor from "../../theme/priamry.styles";

const CurstomCursor = () => {
  const status = useSelector(sidebarStauts);
  const theme = useSelector(selectThemeStyle);
  const [mousePosition, setMousePosition] = useState({
    x: 400,
    y: 400,
  });

  const [scrollY, setSrollY] = useState({ ys: 0 });
  const cursorType = useSelector(selectCursorHover);

  useEffect(() => {
    const onMouseMove = (event) => {
      const { clientX: x, clientY: y } = event;
      setMousePosition({ x, y });
    };
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = document.documentElement.scrollTop;
      if (y === scrollY) return;
      setSrollY({ ys: y });
    };
    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [scrollY]);

  const variants = {
    onHover: {
      scale: 1.5,
      border: `3px solid ${theme.color}`,
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
        scrolly={scrollY}
        className={cursorType ? "hovered" : ""}
      />
    </>
  );
};

export default CurstomCursor;
