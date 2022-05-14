/** @format */

import {
  HomeFeatureSection,
  HomeFeatureContent,
  HomeFeatureTitle,
  HomeFeatureParagraph,
  HomeFeatureSecondParagraph,
  HomeFeatureIcon,
  HomeFeatureNews,
  HomeFeatureNewsBtn,
} from "./homeFeature.styles";
import { Flex } from "../../Flex/flex.styles";
import FeatureVidoe from "../featureVideo/featureVideo.component";
import { BsFillForwardFill, BsSunglasses } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { toggleCursorStyle } from "../../../redux/cursor/cursor.actions";
import { useNavigate } from "react-router-dom";
import routes from "../../../router.config";

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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleHover = () => {
    dispatch(toggleCursorStyle());
  };

  return (
    <Flex direction="column">
      <HomeFeatureSection
        initial="rest"
        whileHover="hover"
        animate="rest"
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <HomeFeatureContent>
          <HomeFeatureParagraph>ELECTROCHROMIC LENSES</HomeFeatureParagraph>
          <HomeFeatureSecondParagraph>
            NEW ARRIVALS 2022
          </HomeFeatureSecondParagraph>
          <HomeFeatureTitle
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            onClick={() => navigate(`${routes.SHOPPAGE}`)}
          >
            <span>OUR</span>
            <span>PRODUCTION</span>
            <HomeFeatureIcon variants={titleMovtion}>
              <BsFillForwardFill className="icon" />
            </HomeFeatureIcon>
          </HomeFeatureTitle>
        </HomeFeatureContent>
        <FeatureVidoe />
      </HomeFeatureSection>
      <HomeFeatureNews>
        <HomeFeatureNewsBtn
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          onClick={() => navigate(`${routes.VIRTUAL}`)}
        >
          <BsSunglasses className="button_icon" />
          <p>Virtual Try-On</p>
        </HomeFeatureNewsBtn>
      </HomeFeatureNews>
    </Flex>
  );
};

export default HomeFeature;
