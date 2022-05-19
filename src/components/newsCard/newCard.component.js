/** @format */

import React from "react";
import { NewsCardContainer, NewsTextContent } from "./newCard.styles";
import PreLoadImage from "../preLoadImage/preLoadImage.component";

const WORDLIMIT = 25;

const NewsCard = ({ latestPost }) => {
  const { image, outline, releaseDate, title, isPublic } = latestPost;
  return (
    isPublic && (
      <NewsCardContainer>
        <PreLoadImage text={title} url={image} />
        <NewsTextContent>
          <h3>{title}</h3>
          <span>{releaseDate}</span>
          <p>
            {outline
              .split(" ")
              .filter((_, index) => index <= WORDLIMIT)
              .join(" ") + " ...."}
          </p>
        </NewsTextContent>
      </NewsCardContainer>
    )
  );
};

export default NewsCard;
