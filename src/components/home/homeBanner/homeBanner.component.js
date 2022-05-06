/** @format */

import {
  HomeContainer,
  BannerVideo,
  VideoContainer,
} from "./homeBanner.styles";
import CanvasBanner from "../canvas/canvas.component";
import homeBannerVideo from "../../../assets/video/bannerVideo.mp4";
import BannerTitle from "../bannerTitle/bannerTitle.component";
import { useSelector } from "react-redux";
import { sidebarStauts } from "../../../redux/sidebar/sidebar.select";
import { useEffect, useState, useCallback } from "react";

const HomeBanner = () => {
  const visible = useSelector(sidebarStauts);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  const checkSidebarOpenFirst = useCallback(() => {
    setSidebarIsOpen((prev) => (prev = true));
  }, []);

  useEffect(() => {
    if (visible) checkSidebarOpenFirst();
  }, [checkSidebarOpenFirst, visible]);

  return (
    <HomeContainer>
      <BannerTitle />
      <BannerVideo>
        <VideoContainer
          type="video/mp4"
          muted
          autoPlay={true}
          playsInline
          controls={false}
          loop
          src={homeBannerVideo}
        />
      </BannerVideo>
      {sidebarIsOpen ? null : <CanvasBanner />}
    </HomeContainer>
  );
};

export default HomeBanner;
