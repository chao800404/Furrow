/** @format */

import {
  AboutBanner,
  AboutTitle,
  AboutBannerTxt1,
  AboutBannerTxt2,
  AboutBannerBG,
} from "./baiscBanner.styles";
import Div100vh from "react-div-100vh";

const BasicBanner = ({ img, title, txt, onLoad }) => {
  return (
    <Div100vh style={{ width: "100%" }}>
      <AboutBanner initial={{ scale: 0.5 }} animate={{ scale: 1 }}>
        <AboutBannerBG onLoad={onLoad} alt="about-banner" src={img} />
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
    </Div100vh>
  );
};

export default BasicBanner;
