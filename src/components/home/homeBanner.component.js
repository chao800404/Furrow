/** @format */

import { HomeContainer, BannerVideo } from "./homeBanner.styles";
import CanvasBanner from "./canvas/canvas.component";
import videoPath from "../../assets/bannerVideo.mp4";
import BannerTitle from "./bannerTitle/bannerTitle.component";
import { useSelector } from "react-redux";
import { sidebarStauts } from "../../redux/sidebar/sidebar.select";
import { useEffect, useState, useCallback } from "react";
const HomeBanner = () => {
  const visible = useSelector(sidebarStauts);

  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  const checkSidebarOpenFirst = useCallback(() => {
    if (!sidebarIsOpen) setSidebarIsOpen(visible);
  }, [sidebarIsOpen, visible]);

  useEffect(() => {
    checkSidebarOpenFirst();
  }, [checkSidebarOpenFirst]);

  return (
    <HomeContainer>
      <BannerTitle />
      <BannerVideo>
        <video loop autoPlay muted src={videoPath} />
      </BannerVideo>
      {sidebarIsOpen ? null : <CanvasBanner />}
    </HomeContainer>
  );
};

export default HomeBanner;
