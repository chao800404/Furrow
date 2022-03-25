/** @format */

import { HomeContainer, BannerVideo } from "./homeBanner.styles";
import CanvasBanner from "./canvas/canvas.component";
import videoPath from "../../assets/bannerVideo.mp4";
import BannerTitle from "./bannerTitle/bannerTitle.component";
const HomeBanner = () => {
  return (
    <HomeContainer>
      <BannerTitle />
      <BannerVideo>
        <video loop autoPlay muted src={videoPath} />
      </BannerVideo>
      <CanvasBanner />
    </HomeContainer>
  );
};

export default HomeBanner;
