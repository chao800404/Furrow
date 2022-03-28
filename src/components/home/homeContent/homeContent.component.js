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
import { Flex } from "../../Flex/flex.styles";
import markSvg from "../../../assets/svg/markSvg.svg";
import markSvgSide from "../../../assets/svg/markSvgSide.svg";
import { useInView } from "react-intersection-observer";

const HomeContent = () => {
  const { ref, inView } = useInView({
    // rootMargin: window.innerHeight / 3 + "px",
    threshold: 0,
    delay: 300,
  });

  return (
    <Flex>
      <HomeContainer>
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
          viewport={{ once: false }}
        >
          We’re constantly striving to redefine the eyewear
          landscape---demonstrating that sunglasses can protect, be functional
          and look cool without breaking a sweat.
        </Paragraph>

        <MarkSvgContainer ref={ref}>
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
          viewport={{ once: false }}
        >
          <MarkSvgSideContainer className="svgMarkSide" src={markSvgSide} />
        </MarkSvgSideContent>
      </HomeContainer>
    </Flex>
  );
};

export default HomeContent;
