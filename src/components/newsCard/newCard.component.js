/** @format */

import React, { useState, useEffect } from "react";

import {
  NewsCardContainer,
  NewsCardTextContent,
  NewsCardNotUnfold,
  NewsCardTextSecondContent,
  NewsCardLink,
} from "./newCard.styles";
import PreLoadImage from "../preLoadImage/preLoadImage.component";
import { Link } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";

const WORDLIMIT = {
  LARGER: 25,
  SMALLER: 10,
};

const NewsCard = ({ post, index, length, isActive, setIsActive }) => {
  const { image, outline, releaseDate, title, isPublic, _id, slug } = post;
  const [unfold, setUnfold] = useState(false);

  useEffect(() => {
    if (_id === isActive) setUnfold((prev) => true);
    else setUnfold((prev) => (prev = false));
  }, [isActive, _id]);

  return unfold
    ? isPublic && (
        <NewsCardContainer
          id={_id}
          onClick={() => setIsActive((prev) => (prev = _id))}
          initial={{ scale: 0.95, y: `-${index * 15}px ` }}
          animate={{ scale: 1, y: `-${index * 15}px` }}
          transition={{ delay: 0.05 }}
        >
          <PreLoadImage text={title} url={image} />
          <NewsCardTextContent>
            <h3>{title}</h3>
            <span>{releaseDate}</span>
            <p>
              {outline
                .split(" ")
                .filter((_, index) => index <= WORDLIMIT.LARGER)
                .join(" ") + " ...."}
            </p>
            <NewsCardLink to={slug.current}>
              <IoIosArrowUp />
            </NewsCardLink>
          </NewsCardTextContent>
        </NewsCardContainer>
      )
    : isPublic && (
        <NewsCardNotUnfold
          style={{
            transform: `translateY(-${index * 10}%)`,
            zIndex: `${length - index}`,
          }}
          id={_id}
          onClick={() => setIsActive((prev) => (prev = _id))}
        >
          <PreLoadImage className="card-second-type" text={title} url={image} />
          <NewsCardTextSecondContent>
            <h3>{title}</h3>
            <span>{releaseDate}</span>
            <p>
              {outline
                .split(" ")
                .filter((_, index) => index <= WORDLIMIT.SMALLER)
                .join(" ") + " ...."}
            </p>
          </NewsCardTextSecondContent>
        </NewsCardNotUnfold>
      );
};

export default NewsCard;
