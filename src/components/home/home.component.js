/** @format */

import { HomeContainer, BannerVideo } from "./home.styles";
import videoPath from "../../assets/bannerVideo.mp4";

const HomePage = () => {
  return (
    <HomeContainer>
      <BannerVideo>
        <video height="100%" width="100%" loop autoPlay muted src={videoPath} />
      </BannerVideo>
    </HomeContainer>
  );
};

export default HomePage;
