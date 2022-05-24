/** @format */

import React, { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { selectUnfoldPostData } from "../../redux/post/post.select";
import { useSelector } from "react-redux";
import getYouTubeId from "get-youtube-id";
import YouTube from "react-youtube";
import PortableText from "@sanity/block-content-to-react";
import { urlFor } from "../../lib/client";
import PreLoadImage from "../preLoadImage/preLoadImage.component";
import { AiFillCloseCircle } from "react-icons/ai";
import { AnimatePresence } from "framer-motion";
import {
  NewsOverViewPageContainer,
  NewsOverViewBox,
  NewsBanner,
  NewsTextTable,
  NewsCloseBtn,
} from "./newOverPage.styles";

const NewsOverPage = ({ slugPageIsVisible, setSlugPageIsVisible }) => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const boxContainer = useRef(null);

  const playerRef = useRef(null);

  const curPost = useSelector(selectUnfoldPostData)[slug];
  const { image, title, _updatedAt } = curPost || {};

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
            ref={playerRef}
            loading="lazy"
          />
        );
      },
      image: ({ node }) => {
        return <img src={urlFor(node.asset).url()} alt="image11" />;
      },
    },
  };

  const goToPrevPage = (e) => {
    const boxContainer = e.target.closest("[data-content= box-container]");
    const closeContainer = e.target.closest("[ data-content= close-container]");
    if (!boxContainer || closeContainer) {
      setSlugPageIsVisible((prev) => !prev);
    }
  };

  useEffect(() => {
    document.body.style = "overflow: hidden";
    setSlugPageIsVisible((prev) => (prev = true));

    return () => {
      document.body.style = "overflow:unset";
      playerRef.current = null;
    };
  }, [setSlugPageIsVisible]);

  return (
    <NewsOverViewPageContainer onClick={goToPrevPage} ref={boxContainer}>
      <AnimatePresence onExitComplete={() => navigate(-1)}>
        {slugPageIsVisible && (
          <NewsOverViewBox
            key={slug}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ ease: "easeInOut" }}
            data-content="box-container"
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
              <PortableText blocks={curPost.body} serializers={serializers} />
            </NewsTextTable>
          </NewsOverViewBox>
        )}
      </AnimatePresence>
    </NewsOverViewPageContainer>
  );
};

export default NewsOverPage;
