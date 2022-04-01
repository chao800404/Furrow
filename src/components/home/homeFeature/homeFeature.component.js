/** @format */

import {
  HomeFeatureSection,
  HomeFeatureVideo,
  HomeFeatureContent,
  HomeFeatureTitle,
  HomeFeatureParagraph,
  HomeFeatureSecondParagraph,
  HomeFeatureIcon,
  HomeFeatureNews,
  HomeFeatureNewsBtn,
} from "./homeFeature.styles";
import { Flex } from "../../Flex/flex.styles";
import useVideoShouldPlay from "../../../utils/useVideoShouldPlay";
import feature from "../../../assets/video/featureVideo_sd.mp4";
import { BsFillForwardFill, BsSunglasses } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { toggleCursorStyle } from "../../../redux/cursor/cursor.actions";

const variants = {
  isView: {
    scale: 1,
    opacity: 1,
  },
  moveoutView: {
    scale: 0.8,
    opacity: 0,
  },
};

const titleMovtion = {
  rest: {
    x: 0,
  },

  hover: {
    x: [0, 10, 0],
    transition: {
      repeat: Infinity,
      duration: 1.5,
    },
  },
};

const HomeFeature = () => {
  const { videoEl, ref, inView } = useVideoShouldPlay();
  const dispatch = useDispatch();

  const handleHover = () => {
    dispatch(toggleCursorStyle());
  };

  return (
    <Flex direction="column">
      <HomeFeatureSection initial="rest" whileHover="hover" animate="rest">
        <HomeFeatureContent variants={variants}>
          <HomeFeatureParagraph>ELECTROCHROMIC LENSES</HomeFeatureParagraph>
          <HomeFeatureSecondParagraph>
            NEW ARRIVALS 2022
          </HomeFeatureSecondParagraph>
          <HomeFeatureTitle
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
          >
            <span>OUR</span>
            <span>PRODUCTION</span>
            <HomeFeatureIcon variants={titleMovtion}>
              <BsFillForwardFill className="icon" />
            </HomeFeatureIcon>
          </HomeFeatureTitle>
        </HomeFeatureContent>
        <HomeFeatureVideo
          animate={inView ? "inView" : "moveoutView"}
          variants={variants}
          transition={{ delay: 0.4 }}
          ref={ref}
        >
          <video
            style={{ willChange: "transfrom" }}
            ref={videoEl}
            loop
            autoPlay
            muted
            src={feature}
          />
        </HomeFeatureVideo>
      </HomeFeatureSection>
      <HomeFeatureNews>
        <HomeFeatureNewsBtn
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        >
          <BsSunglasses className="button_icon" />
          <p>Virtual Try-On</p>
        </HomeFeatureNewsBtn>
      </HomeFeatureNews>
    </Flex>
  );
};

export default HomeFeature;
