/** @format */

import {
  HomeContainer,
  BannerVideo,
  BannerTitle,
  Canvas,
} from "./homeBanner.styles";
import videoPath from "../../assets/bannerVideo.mp4";
import React, { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const HomeBanner = () => {
  const canvas = useRef(null);
  const theme = useSelector(({ theme: { themeStyle } }) => themeStyle);
  const [windowSizes, setWindowSizes] = useState(getSize);
  const [isDrawing, setIsDrawing] = useState(false);
  const [titlePosition, setTitlePosition] = useState(0);

  function getSize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const elec = [
      { text: "What's", baseline: "bottom" },
      { text: "Electrochromic ?", baseline: "top" },
    ];
    const events = ["load", "resize"];
    events.forEach((event) => window.addEventListener(event, setSize));

    function setSize() {
      const size = getSize();
      setWindowSizes(size);
    }

    function renderText(text, baseline) {
      renderCtx.font =
        text === "What's"
          ? `${windowSizes.width / 9}px Anton`
          : `${windowSizes.width / 12}px Anton`;
      renderCtx.translate(windowSizes.width, text === "What's" ? 50 : 20);
      renderCtx.translate(-titlePosition, 0);
      renderCtx.fillStyle = theme.color;
      renderCtx.textAlign = "center";
      renderCtx.textBaseline = baseline;
      renderCtx.fillText(
        text.toUpperCase(),
        windowSizes.width / 2,
        windowSizes.height / 2,
        windowSizes.width
      );
      if (text === "What's") {
        renderCtx.globalCompositeOperation = "destination-out";
      }
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

    return () =>
      events.forEach((event) => window.removeEventListener(event, setSize));
  }, [windowSizes, theme, titlePosition]);

  useEffect(() => {
    const SPEED = 1.085;
    const intervalId = setInterval(
      () => setTitlePosition((titlePosition + 1) * SPEED),
      1000 / 60
    );
    if (titlePosition >= windowSizes.width) {
      setTitlePosition(windowSizes.width);
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [titlePosition, windowSizes.width]);

  const startDrawing = (event) => {
    setIsDrawing(true);
    const renderElem = canvas.current;
    const renderCtx = renderElem.getContext("2d");
    renderCtx.beginPath();
  };

  const finishDrawing = () => {
    setIsDrawing(false);
    const renderElem = canvas.current;
    const renderCtx = renderElem.getContext("2d");
    renderCtx.closePath();
  };

  const drawing = (event) => {
    if (isDrawing) {
      const { clientX, clientY } = event;
      const renderElem = canvas.current;
      const renderCtx = renderElem.getContext("2d");

      renderCtx.lineWidth = 50;
      renderCtx.lineHeight = 100;
      renderCtx.lineTo(clientX, clientY);
      renderCtx.moveTo(clientX, clientY);

      renderCtx.storkeStyle = "rgba(0,0,0,1)";
      renderCtx.stroke();
      renderCtx.globalCompositeOperation = "destination-out";
    }
  };

  return (
    <HomeContainer>
      <BannerVideo>
        <video loop autoPlay muted src={videoPath} />
      </BannerVideo>
      <Canvas
        ref={canvas}
        // theme={theme.backgroundColor}
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={drawing}
      />
      <BannerTitle
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: 500, opacity: 0 }}
      ></BannerTitle>
    </HomeContainer>
  );
};

export default HomeBanner;
