/** @format */

import React, { useRef, useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bannerAction } from "../../../redux/banner/banner.action";
import { Canvas } from "./canvas.style";

const CanvasBanner = () => {
  const canvas = useRef(null);
  const theme = useSelector(({ theme: { themeStyle } }) => themeStyle);
  const [windowSizes, setWindowSizes] = useState(getSize());
  const [isDrawing, setIsDrawing] = useState(false);
  const [titlePosition, setTitlePosition] = useState(0);
  const [drawn, setDrawn] = useState(false);
  const dispatch = useDispatch();

  function getSize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const events = ["load", "resize"];
    function setSize() {
      const size = getSize();
      setWindowSizes(size);
    }
    events.forEach((event) => window.addEventListener(event, setSize));
    return () =>
      events.forEach((event) => window.removeEventListener(event, setSize));
  }, []);

  const callDawn = useCallback(() => {
    if (drawn) return;
    dispatch(bannerAction());
  }, [drawn, dispatch]);

  useEffect(() => {
    const elec = [
      { text: "What's", baseline: "bottom" },
      { text: "Electrochromic ?", baseline: "top" },
    ];

    const radio = () => {
      return windowSizes.width / windowSizes.height > 1
        ? windowSizes.width
        : windowSizes.height / 1.2;
    };

    function renderText(text, baseline) {
      renderCtx.font =
        text === "What's"
          ? `${radio() / 9}px Anton`
          : `${radio() / 12}px Anton`;
      renderCtx.textAlign = "center";
      renderCtx.fillStyle = theme.color;

      renderCtx.translate(
        windowSizes.width,
        text === "What's" ? radio() / 30 : 20
      );
      renderCtx.translate(-titlePosition, 0);

      renderCtx.textBaseline = baseline;
      renderCtx.fillText(
        text.toUpperCase(),
        windowSizes.width / 2,
        windowSizes.height / 2,
        windowSizes.width
      );

      renderCtx.globalCompositeOperation = "destination-out";
    }
    const renderElem = canvas.current;
    const renderCtx = renderElem.getContext("2d");
    renderElem.width = windowSizes.width * 2;
    renderElem.height = windowSizes.height * 2;
    renderElem.style.width = `${windowSizes.width}px`;
    renderElem.style.height = `${windowSizes.height}px`;
    renderCtx.scale(2, 2);
    renderCtx.fillStyle = theme.backgroundColor;
    renderCtx.fillRect(0, 0, windowSizes.width, windowSizes.height);
    elec.forEach(({ text, baseline }) => renderText(text, baseline));
    renderCtx.translate(0, -80);
  }, [windowSizes, theme, titlePosition]);

  useEffect(() => {
    const SPEED = 1.1;
    const intervalId = setInterval(
      () => setTitlePosition((titlePosition + 10) * SPEED),
      1000 / 60
    );
    if (titlePosition >= windowSizes.width) {
      setTitlePosition(windowSizes.width);
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [titlePosition, windowSizes.width]);

  const startDrawing = () => {
    setIsDrawing((prev) => (prev = true));
  };

  const finishDrawing = () => {
    setIsDrawing((prev) => (prev = false));
    const renderElem = canvas.current;
    const renderCtx = renderElem.getContext("2d");
    renderCtx.closePath();
  };

  const drawing = (event) => {
    if (isDrawing) {
      setDrawn((prev) => (prev = true));
      callDawn();
      const { clientX, clientY } = event;
      const renderElem = canvas.current;
      const renderCtx = renderElem.getContext("2d");

      renderCtx.lineWidth = 50;
      renderCtx.lineHeight = 100;
      renderCtx.lineTo(clientX, clientY);
      renderCtx.moveTo(clientX, clientY);

      renderCtx.storkeStyle = "rgba(0,0,0,1)";
      renderCtx.stroke();
    }
  };

  return (
    <Canvas
      ref={canvas}
      onPointerDown={startDrawing}
      onPointerUp={finishDrawing}
      onPointerMove={drawing}
    ></Canvas>
  );
};

export default CanvasBanner;
