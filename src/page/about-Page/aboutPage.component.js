/** @format */
import {
  AboutUsPageContainer,
  AboutStatement,
  AboutStory,
  AboutStoryDescription,
  AboutStorySketch,
  AboutStorySketchs,
  AboutJointDescription,
  AboutBussiness,
} from "./aboutPage.styles";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Flex } from "../../components/Flex/flex.styles";
import BasicBanner from "../../components/basicBanner/basicBanner.component";
import FirmLogoContent from "../../components/firmLogo/firmLogo.component";
import { useDispatch, useSelector } from "react-redux";
import { aboutPageAction } from "../../redux/aboutPage/aboutPage.actions";
import { selectAboutPageData } from "../../redux/aboutPage/aboutPage.select";
import { urlFor } from "../../lib/client";
import useCheckScreenIsMobile from "../../utils/useCheckScreen";

const AboutPage = () => {
  const theGlassesSketch = useRef();
  const [touchImageBounding, setTouchImageBounding] = useState(false);
  const dispatch = useDispatch();
  const about = useSelector(selectAboutPageData);
  const isMobile = useCheckScreenIsMobile();

  const { banner_main, joint, aboutStory } = about || {};

  const bounding = useCallback(() => {
    const imgRect = theGlassesSketch.current.getBoundingClientRect();
    const { top, height } = imgRect;
    if (top > height) return;
    top <= 0
      ? setTouchImageBounding((prev) => (prev = true))
      : setTouchImageBounding((prev) => (prev = false));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", bounding);
    return () => window.removeEventListener("scroll", bounding);
  }, [bounding]);

  useEffect(() => {
    dispatch(aboutPageAction());
  }, [dispatch]);

  return (
    <AboutUsPageContainer>
      {about && joint && (
        <>
          <BasicBanner bannerData={banner_main} />
          <AboutStatement>
            <motion.div
              initial={{ opacity: 0 }}
              transition={{ delay: 0.2 }}
              whileInView={{ opacity: 1 }}
            >
              <span>{aboutStory["description"]}</span>
              <h3>{aboutStory["title"]}</h3>
            </motion.div>
          </AboutStatement>
          <Flex style={{ flexDirection: "column" }}>
            <AboutStory>
              <AboutStoryDescription>
                <motion.div
                  initial={{ x: -180, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ amount: 0.1, once: true }}
                >
                  <h2>{joint["joint_0"]["title"]}</h2>
                  <p>{joint["joint_0"]["description"]["description_0"]}</p>
                  <p>{joint["joint_0"]["description"]["description_1"]}</p>
                </motion.div>
              </AboutStoryDescription>
              <AboutStorySketch>
                <motion.img
                  initial={{ opacity: 0, x: 200 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ amount: 0.1, once: true }}
                  alt="glasses-sketch"
                  src={urlFor(joint["joint_0"]["image"])}
                />
              </AboutStorySketch>
              <AboutStorySketchs
                initial={isMobile ? { opacity: 0 } : { opacity: 0, x: 200 }}
                whileInView={isMobile ? { opacity: 1 } : { opacity: 1, x: 0 }}
                viewport={{ amount: 0.3, once: true }}
                alt="glasses-sketch"
                src={urlFor(joint["joint_1"]["image"])}
                ref={theGlassesSketch}
              />

              <AboutJointDescription>
                <motion.div
                  initial={
                    isMobile ? { opacity: 0, x: 0 } : { opacity: 0, x: -200 }
                  }
                  whileInView={isMobile ? { opacity: 1 } : { opacity: 1, x: 0 }}
                  viewport={{ amount: 0.3, once: true }}
                >
                  <h2>{joint["joint_1"]["title"]}</h2>
                  <p>
                    {
                      joint["joint_1"]["description"][
                        touchImageBounding ? "description_1" : "description_0"
                      ]
                    }
                  </p>
                </motion.div>
              </AboutJointDescription>
            </AboutStory>
            <AboutBussiness
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3, once: true }}
            >
              BUSINESSES TRUST ONESEC
            </AboutBussiness>
            <div
              style={{
                width: "100%",
                overflow: "hidden",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <FirmLogoContent />
              <FirmLogoContent />
            </div>
          </Flex>
        </>
      )}
    </AboutUsPageContainer>
  );
};

export default AboutPage;
