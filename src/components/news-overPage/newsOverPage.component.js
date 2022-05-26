/** @format */

import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { selectUnfoldPostData } from "../../redux/post/post.select";
import { useSelector } from "react-redux";
import getYouTubeId from "get-youtube-id";
import YouTube from "react-youtube";
import PortableText from "@sanity/block-content-to-react";
import { urlFor } from "../../lib/client";
import PreLoadImage from "../preLoadImage/preLoadImage.component";
import { AiFillCloseCircle } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import { MdKeyboardArrowDown } from "react-icons/md";
import routes from "../../router.config";

import {
  NewsOverViewPageContainer,
  NewsOverViewBox,
  NewsBanner,
  NewsTextTable,
  NewsCloseBtn,
  NewsSrollDownBar,
} from "./newOverPage.styles";

const serializers = {
  types: {
    youtube: ({ node }) => {
      const { url } = node;
      const id = getYouTubeId(url);
      return (
        <YouTube
          style={{ width: "100%" }}
          videoId={id}
          iframeClassName={"youtubeVideo"}
          loading="lazy"
        />
      );
    },
    image: ({ node }) => {
      return <img src={urlFor(node.asset).url()} alt="image11" />;
    },
  },
};

const NewsOverPage = ({ slugPageIsVisible, setSlugPageIsVisible }) => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const boxContainer = useRef(null);
  const elemRef = useRef(null);
  const [eventScroll, setEventScroll] = useState(false);
  const [animateEnd, setAnimateEnd] = useState(false);

  const curPost = useSelector(selectUnfoldPostData)[slug];
  const { image, title, _updatedAt } = curPost || {};

  const goToPrevPage = (e) => {
    const boxContainer = e.target.closest("[data-content= box-container]");
    const closeContainer = e.target.closest("[ data-content= close-container]");
    if (!boxContainer || closeContainer) {
      setSlugPageIsVisible((prev) => !prev);
      setEventScroll((prev) => (prev = false));
    }
  };

  useEffect(() => {
    document.body.style = "overflow: hidden";
    setSlugPageIsVisible((prev) => (prev = true));
    return () => {
      document.body.style = "overflow:unset";
    };
  }, [setSlugPageIsVisible]);

  useEffect(() => {
    const elem = elemRef?.current;
    const handleScroll = () => {
      if (elem.scrollTop > 0) {
        setEventScroll((prev) => (prev = true));
        return;
      }
    };
    if (elem)
      elem?.addEventListener("scroll", handleScroll, { passive: false });
    return () => elem?.removeEventListener("scroll", handleScroll);
  }, [animateEnd]);

  return (
    <NewsOverViewPageContainer onClick={goToPrevPage} ref={boxContainer}>
      <AnimatePresence
        onExitComplete={() => navigate(`${routes.NEWS}`, { replace: true })}
      >
        {slugPageIsVisible && (
          <NewsOverViewBox
            ref={elemRef}
            key={slug}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ ease: "easeInOut" }}
            data-content="box-container"
            onAnimationComplete={() => setAnimateEnd((prev) => (prev = true))}
            onAnimationStart={() => setAnimateEnd((prev) => (prev = false))}
          >
            <NewsCloseBtn
              whileTap={{ y: 1, scale: 0.95 }}
              data-content="close-container"
            >
              <AiFillCloseCircle />
            </NewsCloseBtn>
            <NewsBanner>
              <PreLoadImage text={title} url={image} />
            </NewsBanner>

            <NewsTextTable>
              <h1> {title}</h1>
              <span>{_updatedAt}</span>
              {animateEnd && (
                <PortableText blocks={curPost.body} serializers={serializers} />
              )}
            </NewsTextTable>
            {!eventScroll && (
              <NewsSrollDownBar>
                <motion.div
                  style={{ width: "5rem", height: "5rem" }}
                  animate={{ y: [15, 5, 15] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <MdKeyboardArrowDown />
                </motion.div>
              </NewsSrollDownBar>
            )}
          </NewsOverViewBox>
        )}
      </AnimatePresence>
    </NewsOverViewPageContainer>
  );
};

export default NewsOverPage;
