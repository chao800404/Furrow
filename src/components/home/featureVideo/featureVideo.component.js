/** @format */

import {
  HomeFeatureVideo,
  HomeFeatureVideoContainer,
} from "./featureVidoe.styles";
import feature from "../../../assets/video/featureVideo_sd.mp4";

const FeauteVideo = () => {
  return (
    <HomeFeatureVideo
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duraction: 100, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      <HomeFeatureVideoContainer
        type="video/mp4"
        muted
        autoPlay={true}
        playsInline
        controls={false}
        loop
        src={feature}
      />
    </HomeFeatureVideo>
  );
};

export default FeauteVideo;
