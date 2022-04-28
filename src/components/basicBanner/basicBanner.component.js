/** @format */

import {
  AboutBanner,
  AboutTitle,
  AboutBannerTxt1,
  AboutBannerTxt2,
} from "./baiscBanner.styles";

const BasicBanner = ({ img, title, txt }) => {
  return (
    <AboutBanner initial={{ scale: 0.5 }} animate={{ scale: 1 }}>
      <img alt="about-banner" src={img} />
      <AboutTitle
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        alt="about-title"
        src={title}
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
        {txt}
      </AboutBannerTxt2>
    </AboutBanner>
  );
};

export default BasicBanner;
