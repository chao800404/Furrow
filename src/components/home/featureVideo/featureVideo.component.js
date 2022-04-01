/** @format */

import { HomeFeatureVideo } from "./featureVidoe.styles";
import feature from "../../../assets/video/featureVideo_sd.mp4";

const FeauteVideo = () => {
  return (
    <HomeFeatureVideo
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duraction: 100, ease: "easeInOut" }}
    >
      <video muted autoPlay loop src={feature} />
    </HomeFeatureVideo>
  );
};

export default FeauteVideo;
