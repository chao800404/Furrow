/** @format */

import { motion } from "framer-motion";
import { urlFor } from "../../lib/client";
import {
  FeatureBannerContainer,
  FeatureBannerImgContainer,
  FeatureTitle,
  FeatureBannerOverFlow,
} from "./featureBanner.styles";

const FeatureBanner = ({ feature }) => {
  return (
    <FeatureBannerContainer>
      <FeatureBannerOverFlow>
        <FeatureBannerImgContainer>
          <motion.img
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            src={urlFor(feature["image"]["image_0"])}
            loading="lazy"
          />
          <motion.img
            initial={{ y: 80 }}
            animate={{ y: 30 }}
            src={urlFor(feature["image"]["image_1"])}
            loading="lazy"
          />
          <motion.img
            initial={{ y: -80 }}
            animate={{ y: -20 }}
            src={urlFor(feature["image"]["image_2"])}
            loading="lazy"
          />
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
