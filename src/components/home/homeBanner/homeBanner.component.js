/** @format */

import { HomeContainer, BannerVideo } from "./homeBanner.styles";
import CanvasBanner from "../canvas/canvas.component";
import homeBannerVideo from "../../../assets/video/bannerVideo.mp4";
import BannerTitle from "../bannerTitle/bannerTitle.component";
import { useSelector } from "react-redux";
import { sidebarStauts } from "../../../redux/sidebar/sidebar.select";
import { useEffect, useState, useCallback } from "react";
import useVideoShouldPlay from "../../../utils/useVideoShouldPlay";

const HomeBanner = () => {
  const visible = useSelector(sidebarStauts);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const { videoEl, ref } = useVideoShouldPlay();

  const checkSidebarOpenFirst = useCallback(() => {
    if (!sidebarIsOpen) setSidebarIsOpen(visible);
  }, [sidebarIsOpen, visible]);

  useEffect(() => {
    checkSidebarOpenFirst();
  }, [checkSidebarOpenFirst]);

  return (
    <HomeContainer ref={ref}>
      <BannerTitle />
      <BannerVideo>
        <video ref={videoEl} muted loop src={homeBannerVideo} />
      </BannerVideo>
      {sidebarIsOpen ? null : <CanvasBanner />}
    </HomeContainer>
  );
};

export default HomeBanner;
