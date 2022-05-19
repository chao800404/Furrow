/** @format */

import {
  AboutBanner,
  AboutTitle,
  AboutBannerTxt1,
  AboutBannerTxt2,
  AboutBannerBG,
} from "./baiscBanner.styles";
import useWinowSize from "../../utils/useWindowSize";
import { urlFor } from "../../lib/client";

const BasicBanner = ({ bannerData }) => {
  const { height } = useWinowSize();
  return (
    <AboutBanner
      height={height}
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
    >
      <>
        <AboutBannerBG
          alt="about-banner"
          src={urlFor(bannerData.image_0)}
          loading="lazy"
        />
        <AboutTitle
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          alt="about-title"
          src={urlFor(bannerData.image_1)}
          loading="lazy"
        />
        <AboutBannerTxt1
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          ELECTROCHROMISM
        </AboutBannerTxt1>
        <AboutBannerTxt2
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {bannerData.description}
        </AboutBannerTxt2>
      </>
    </AboutBanner>
  );
};

export default BasicBanner;
