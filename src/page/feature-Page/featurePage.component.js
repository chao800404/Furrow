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
} from "./featurePage.styles";
import {
  BsArrowRightSquareFill,
  BsArrowLeftSquareFill,
  BsPlusCircleFill,
} from "react-icons/bs";
import featureImg from "../../assets/featurePhoto/feature_image_4.webp";
import FeatureBanner from "../../components/featureBanner/featureBanner.component";
import { imgArr, imgArr1 } from "./featurePage.data";
import { useSelector, useDispatch } from "react-redux";
import { selectThemeStyle } from "../../redux/theme/theme.select";
import { fetchFeatureStart } from "../../redux/featuresPage/feature.action";
import { featurePageData } from "../../redux/featuresPage/feature.select";
import CubeSpinner from "../../components/cube-spinner/cube-spinner.component";

const FeaturePage = () => {
  const [inView, setInView] = useState(0);
  const [displayProperty, setDisplayProperty] = useState(0);
  const featureBtnContainer = useRef();
  const theme = useSelector(selectThemeStyle);
  const dispatch = useDispatch();
  const feature = useSelector(featurePageData);

  useEffect(() => {
    dispatch(fetchFeatureStart());
  }, [dispatch]);

  const increment = useCallback((btnType) => {
    btnType.dataset.type === "leftArrow"
      ? setInView((prev) => {
          if (prev <= 0) return (prev = 0);
          return (prev = prev - 1);
        })
      : setInView((prev) => {
          if (prev >= imgArr.length - 1) return (prev = imgArr.length - 1);
          return (prev = prev + 1);
        });
  }, []);

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
    if (!feature) return;
    const btnContainer = featureBtnContainer.current;
    [...btnContainer?.children].forEach((dom) =>
      dom.children[0]?.classList.remove("visible")
    );
    const btnContent = btnContainer?.children[displayProperty]?.children?.[0];
    btnContent.classList.add("visible");
  }, [displayProperty, feature]);

  return (
    <FeatureContainer>
      <Flex style={{ padding: "20rem 0", flexDirection: "column" }}>
        {feature ? (
          <>
            <FeatureBanner feature={feature} />
            <FeatureStory>
              <FeatureContent>
                <h3>{feature?.["story"]?.["title"]}</h3>
                <p>{feature?.["story"]?.[inView]}</p>
                <div
                  style={{ marginTop: "3rem", display: "flex" }}
                  onClick={handleClick}
                >
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
                </div>
              </FeatureContent>
              <FeatureImgContainer>
                <span>{imgArr[inView]["status"]}</span>
                <img alt="glasses-filter" src={imgArr[inView]["img"]} />
              </FeatureImgContainer>
              {imgArr.map((_, index) => (
                <motion.div
                  key={index}
                  style={{ gridColumn: "1 / -1", height: "40rem" }}
                  data-item={index}
                  onViewportEnter={() => setInView((prev) => (prev = index))}
                  viewport={{ amount: 0.5 }}
                />
              ))}
            </FeatureStory>
            <FeatureFunction>
              <h4>{feature?.["function"]?.[0]}</h4>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 2fr",
                }}
              >
                <div>
                  {imgArr1.map((data, index) => (
                    <ProofIconContainer key={index}>
                      <ReactSVG
                        style={{ width: "15rem" }}
                        src={data["img"]}
                        beforeInjection={(svg) =>
                          svg.setAttribute(
                            "style",
                            `font-size:10rem; display:flex ; align-items:center;justify-content:center;fill:${theme.color};`
                          )
                        }
                      />
                      <span>{data["statement"]}</span>
                    </ProofIconContainer>
                  ))}
                </div>

                <div
                  style={{ width: "80%", position: "relative" }}
                  onClick={handleGlassesFeatureDisplay}
                  ref={featureBtnContainer}
                >
                  <FeatureGlassesBtn
                    whileTap={{ scale: 0.95 }}
                    data-type="featureBtn-0"
                    top="35%"
                    left="50%"
                  >
                    <span style={{ top: "-10rem" }}>
                      {feature?.["property"]?.[0]}
                    </span>
                    <BsPlusCircleFill />
                  </FeatureGlassesBtn>

                  <FeatureGlassesBtn
                    whileTap={{ scale: 0.95 }}
                    data-type="featureBtn-1"
                    top="25%"
                    left="33%"
                  >
                    <span style={{ left: "-14rem" }}>
                      {feature?.["property"]?.[1]}
                    </span>
                    <BsPlusCircleFill />
                  </FeatureGlassesBtn>
                  <FeatureGlassesBtn
                    whileTap={{ scale: 0.95 }}
                    data-type="featureBtn-2"
                    top="40%"
                    right="25%"
                  >
                    <span
                      style={{ top: "-5rem", right: "-20rem", width: "20rem" }}
                    >
                      {feature?.["property"]?.[2]}
                    </span>
                    <BsPlusCircleFill />
                  </FeatureGlassesBtn>

                  <img
                    style={{ width: "150%" }}
                    alt="glasses"
                    src={featureImg}
                  />
                </div>
              </div>
            </FeatureFunction>
          </>
        ) : (
          <CubeSpinner />
        )}
      </Flex>
    </FeatureContainer>
  );
};

export default FeaturePage;
