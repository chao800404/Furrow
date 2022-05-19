/** @format */
import { Flex } from "../../components/Flex/flex.styles";
import { motion } from "framer-motion";
import { useState, useEffect, useCallback, useRef } from "react";
import { ReactSVG } from "react-svg";
import {
  FeatureContainer,
  FeatureStory,
  FeatureContent,
  FeatureImgContainer,
  FeatureGlassesBtn,
  ProofIconContainer,
  FeatureFunction,
  FeatureStoryContainer,
  FeatureStoryBtnContainer,
  FeatureFunctionContainer,
  FeatureGlassesContainer,
  FeatureBg,
} from "./featurePage.styles";
import {
  BsArrowRightSquareFill,
  BsArrowLeftSquareFill,
  BsPlusCircleFill,
} from "react-icons/bs";

import { imgArr1 } from "./featurePage.data";
import { useSelector, useDispatch } from "react-redux";
import { selectThemeStyle } from "../../redux/theme/theme.select";
import { fetchFeatureStart } from "../../redux/featuresPage/feature.action";
import {
  featurePageData,
  featurePageFunction,
} from "../../redux/featuresPage/feature.select";
import FeatureBanner from "../../components/featureBanner/featureBanner.component";
import { urlFor } from "../../lib/client";

const FeaturePage = () => {
  const [inView, setInView] = useState([0]);
  const [displayProperty, setDisplayProperty] = useState(0);
  const [curView, setCurView] = useState(0);
  const [imgArr, setImgArr] = useState([]);
  const featureBtnContainer = useRef();
  const theme = useSelector(selectThemeStyle);
  const dispatch = useDispatch();
  const feature = useSelector(featurePageData);
  const { banner_main, story, property } = feature || {};
  const functions = useSelector(featurePageFunction);

  useEffect(() => {
    if (story)
      setImgArr(
        (prev) =>
          (prev = Object.keys(story).filter((item) =>
            item.includes("storyDescription")
          ))
      );
  }, [story]);

  useEffect(() => {
    const max = Math.max(...inView);
    setCurView((prev) => {
      if (max <= 0) return (prev = 0);
      return (prev = max);
    });
  }, [inView]);

  useEffect(() => {
    dispatch(fetchFeatureStart());
  }, [dispatch]);

  const increment = useCallback(
    (btnType) => {
      if (!imgArr) return;
      btnType.dataset.type === "leftArrow"
        ? setCurView((prev) => {
            if (prev <= 0) return (prev = 0);
            return (prev = prev - 1);
          })
        : setCurView((prev) => {
            if (prev >= imgArr?.length - 1) return (prev = imgArr?.length - 1);
            return (prev = prev + 1);
          });
    },
    [imgArr]
  );

  const handleClick = (e) => {
    const btnType = e.target.closest("span");
    if (!btnType) return;
    increment(btnType);
  };

  const handleGlassesFeatureDisplay = (e) => {
    const glassesBtn = e.target.closest("[data-type]");
    if (!glassesBtn) return;
    const index = +glassesBtn.dataset.type.split("-")[1];
    setDisplayProperty((prev) => (prev = index));
  };

  useEffect(() => {
    const btnContainer = featureBtnContainer.current;
    if (!btnContainer) return;
    [...btnContainer?.children]?.forEach((dom) =>
      dom?.children[0]?.classList.remove("visible")
    );
    const btnContent = btnContainer.children?.[displayProperty].children?.[0];
    btnContent?.classList.add("visible");
  }, [displayProperty, feature, imgArr]);

  return (
    <FeatureContainer>
      <Flex style={{ flexDirection: "column" }}>
        {feature && imgArr && property && (
          <>
            <FeatureBanner feature={banner_main} />
            <FeatureStory>
              <FeatureStoryContainer>
                <FeatureContent>
                  {curView !== 0 && <FeatureBg>{curView}</FeatureBg>}
                  <h3>{story["storyTitle"]}</h3>
                  <p>{story[`storyDescription_${curView}`]["description"]}</p>
                  <FeatureStoryBtnContainer onClick={handleClick}>
                    <motion.span
                      style={{ display: "block", width: "4.5rem" }}
                      whileTap={{ x: -2, scale: 0.95 }}
                      data-type="leftArrow"
                    >
                      <BsArrowLeftSquareFill style={{ width: "100%" }} />
                    </motion.span>
                    <motion.span
                      style={{ display: "block", width: "4.5rem" }}
                      whileTap={{ x: 2, scale: 0.95 }}
                      data-type="rightArrow"
                    >
                      <BsArrowRightSquareFill />
                    </motion.span>
                  </FeatureStoryBtnContainer>
                </FeatureContent>
                <FeatureImgContainer>
                  <span>{story[`storyDescription_${curView}`]["mark"]}</span>
                  <img
                    alt="glasses-filter"
                    src={urlFor(story[`storyDescription_${curView}`]["image"])}
                  />
                </FeatureImgContainer>
              </FeatureStoryContainer>
              {imgArr.map((_, index) => (
                <motion.div
                  key={index}
                  style={{
                    gridColumn: "1 / -1",
                  }}
                  data-item={index}
                  onViewportEnter={() =>
                    setInView((prev) => (prev = [...prev, index]))
                  }
                  onViewportLeave={() =>
                    setInView(
                      (prev) => (prev = prev.filter((item) => item !== index))
                    )
                  }
                  viewport={{ amount: 0.5 }}
                />
              ))}
            </FeatureStory>
            <FeatureFunction>
              <h4>{feature["functions"]["functionTitle"]}</h4>
              <FeatureFunctionContainer>
                <div>
                  {functions.map((data, index) => (
                    <ProofIconContainer key={index}>
                      <ReactSVG
                        className="proof_icon"
                        src={imgArr1[index]}
                        beforeInjection={(svg) =>
                          svg.setAttribute(
                            "style",
                            `font-size:10rem; 
                            display:flex; 
                            align-items:center;
                            justify-content:center;
                            fill:${theme.color};
                            pointer-events:none;
                            `
                          )
                        }
                      />
                      <span>{data}</span>
                    </ProofIconContainer>
                  ))}
                </div>
                <FeatureGlassesContainer
                  onClick={handleGlassesFeatureDisplay}
                  ref={featureBtnContainer}
                >
                  <FeatureGlassesBtn
                    whileTap={{ scale: 0.95 }}
                    data-type="featureBtn-0"
                  >
                    <span className="function-desc-1">
                      {property["property_0"]}
                    </span>
                    <BsPlusCircleFill />
                  </FeatureGlassesBtn>
                  <FeatureGlassesBtn
                    whileTap={{ scale: 0.95 }}
                    data-type="featureBtn-1"
                  >
                    <span className="function-desc-2">
                      {property["property_1"]}
                    </span>
                    <BsPlusCircleFill />
                  </FeatureGlassesBtn>
                  <FeatureGlassesBtn
                    whileTap={{ scale: 0.95 }}
                    data-type="featureBtn-2"
                  >
                    <span className="function-desc-3">
                      {property["property_2"]}
                    </span>
                    <BsPlusCircleFill />
                  </FeatureGlassesBtn>
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      zIndex: 20,
                    }}
                  />
                  <img alt="glasses" src={urlFor(property["image"])} />
                </FeatureGlassesContainer>
              </FeatureFunctionContainer>
            </FeatureFunction>
          </>
        )}
      </Flex>
    </FeatureContainer>
  );
};

export default FeaturePage;
