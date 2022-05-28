/** @format */

import React from "react";
import {
  HomeContainer,
  Paragraph,
  ContentTitle,
  MarkSvgContainer,
  MarkSvgSideContainer,
  MarkSvgSideContent,
} from "./homeContent.style";
import { ReactSVG } from "react-svg";
import FlexLayout from "../../Flex/flex.component";
import markSvg from "../../../assets/svg/markSvg.svg";
import markSvgSide from "../../../assets/svg/markSvgSide.svg";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import { selectThemeStyle } from "../../../redux/theme/theme.select";
import useCheckScreenIsMobile from "../../../utils/useCheckScreen";
import BannerTitle from "../bannerTitle/bannerTitle.component";

const HomeContent = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    delay: 300,
    triggerOnce: true,
  });

  const theme = useSelector(selectThemeStyle);
  const isMobile = useCheckScreenIsMobile();

  return (
    <FlexLayout>
      <HomeContainer>
        {isMobile && <BannerTitle />}
        <ContentTitle>
          <p>
            「Our idea was simple: Sunglasses fall short when it comes to
            functionality.」
          </p>
          <h2>– Dieter Heimgartner.</h2>
        </ContentTitle>
        <Paragraph
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          viewport={{ once: true }}
        >
          We’re constantly striving to redefine the eyewear
          landscape---demonstrating that sunglasses can protect, be functional
          and look cool without breaking a sweat.
        </Paragraph>

        <MarkSvgContainer ref={ref} color={theme}>
          <ReactSVG
            className={`markSvgMg ${inView ? "markSvg" : "hidden"} ${
              inView ? "markSvgAnstart" : ""
            }`}
            src={markSvg}
          />
        </MarkSvgContainer>
        <MarkSvgSideContent
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 200 }}
          viewport={{ once: true }}
        >
          <MarkSvgSideContainer
            color={theme}
            className="svgMarkSide"
            src={markSvgSide}
          />
        </MarkSvgSideContent>
      </HomeContainer>
    </FlexLayout>
  );
};

export default HomeContent;
