/** @format */

import { motion } from "framer-motion";
// import { urlFor } from "../../lib/client";
import {
  FeatureBannerContainer,
  FeatureBannerImgContainer,
  FeatureTitle,
  FeatureBannerOverFlow,
} from "./featureBanner.styles";
import PreloadImageContainer from "../preLoadImage/preLoadImage.component";

const FeatureBanner = ({ feature }) => {
  return (
    <FeatureBannerContainer>
      <FeatureBannerOverFlow>
        <FeatureBannerImgContainer>
          <motion.div
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            className="feature-banner-image"
          >
            <PreloadImageContainer
              url={feature["image"]["image_0"]}
              text="feature-banner"
              className="feature-banner-preload"
            />
          </motion.div>
          <motion.div
            className="feature-banner-image"
            initial={{ y: 80 }}
            animate={{ y: 30 }}
          >
            <PreloadImageContainer
              url={feature["image"]["image_1"]}
              text="feature-banner"
              className="feature-banner-preload"
            />
          </motion.div>
          <motion.div
            initial={{ y: -80 }}
            animate={{ y: -20 }}
            className="feature-banner-image"
          >
            <PreloadImageContainer
              url={feature["image"]["image_2"]}
              text="feature-banner"
              className="feature-banner-preload"
            />
          </motion.div>
        </FeatureBannerImgContainer>
      </FeatureBannerOverFlow>

      <FeatureTitle>
        <motion.h1
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {feature["title"]}
        </motion.h1>
        <motion.span
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {feature["description"]}
        </motion.span>
      </FeatureTitle>
    </FeatureBannerContainer>
  );
};

export default FeatureBanner;
