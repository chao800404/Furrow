/** @format */

import React, { useState, useEffect } from "react";

import {
  NewsCardContainer,
  NewsCardTextContent,
  NewsCardNotUnfold,
  NewsCardTextSecondContent,
  NewsCardLink,
  NewsCardBookmark,
  NewsCardMarkContainer,
} from "./newCard.styles";
import PreLoadImage from "../preLoadImage/preLoadImage.component";
import { IoIosArrowUp } from "react-icons/io";
import { MdOutlineBookmark, MdOutlineBookmarkRemove } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { TOGGLEBookMark } from "../../redux/post/post.actions";
import { selectPostbookMark } from "../../redux/post/post.select";
import primaryColor from "../../theme/priamry.styles";
import ToolTip from "../tooltip/tooltip.component";
import useCheckScreenIsMobile from "../../utils/useCheckScreen";

const WORDLIMIT = {
  LARGER: 20,
  SMALLER: 10,
  SMALL: 5,
};

const NewsCard = ({
  post,
  index,
  length,
  isActive,
  setIsActive,
  setSlugPageIsVisible,
}) => {
  const { image, outline, releaseDate, title, isPublic, _id, slug } = post;
  const [unfold, setUnfold] = useState(false);
  const [len, setLen] = useState(false);
  const dispatch = useDispatch();
  const bookMark = useSelector(selectPostbookMark);
  const isMobile = useCheckScreenIsMobile();

  useEffect(() => {
    if (_id === isActive) setUnfold((prev) => (prev = true));
    else setUnfold((prev) => (prev = false));
  }, [isActive, _id]);

  const handleClick = (e) => {
    const bookMark = e.target.closest("[data-container=bookmark]");
    if (bookMark) dispatch(TOGGLEBookMark(_id));
  };

  useEffect(() => {
    title.split(" ").length > 7
      ? setLen((prev) => (prev = true))
      : setLen((prev) => (prev = false));
  }, [title]);

  return unfold || isMobile
    ? isPublic && (
        <NewsCardContainer
          id={_id}
          onClick={handleClick}
          initial={
            isMobile
              ? { scale: 0.95, y: 0 }
              : { scale: 0.95, y: `-${index * 10}px ` }
          }
          animate={
            isMobile ? { scale: 1, y: 0 } : { scale: 1, y: `-${index * 18}px` }
          }
          transition={{ delay: 0.05 }}
          data-container="card-container"
        >
          <PreLoadImage text={title} url={image} />
          <NewsCardTextContent>
            <h3
              style={
                isMobile ? null : { fontSize: `${len ? "2rem" : "2.8rem"}` }
              }
            >
              {isMobile
                ? title
                    .split(" ")
                    .filter((_, index) => index <= WORDLIMIT.SMALL)
                    .join(" ") + " ...."
                : title}
            </h3>
            <span>{releaseDate}</span>
            <p>
              {outline
                .split(" ")
                .filter(
                  (_, index) =>
                    index <= (isMobile ? WORDLIMIT.SMALL : WORDLIMIT.LARGER)
                )
                .join(" ") + " ...."}
            </p>
            <NewsCardMarkContainer>
              <NewsCardBookmark data-container="bookmark">
                {bookMark.includes(_id) ? (
                  <>
                    <MdOutlineBookmark
                      data-tip
                      data-for="addBookMark"
                      color={primaryColor.cursorColor}
                    />
                    <ToolTip id="addBookMark">Remove BookMark</ToolTip>
                  </>
                ) : (
                  <>
                    <MdOutlineBookmarkRemove
                      data-tip
                      data-for="removeBookMark"
                    />
                    <ToolTip id="removeBookMark">Add BookMark</ToolTip>
                  </>
                )}
              </NewsCardBookmark>
              <NewsCardLink
                onClick={() => setSlugPageIsVisible((prev) => !prev)}
                to={slug.current}
                data-for="blog"
                data-tip
              >
                <IoIosArrowUp />
              </NewsCardLink>
              <ToolTip id="blog">blog</ToolTip>
            </NewsCardMarkContainer>
          </NewsCardTextContent>
        </NewsCardContainer>
      )
    : isPublic && (
        <NewsCardNotUnfold
          style={{
            transform: `translateY(-${index * 15}%)`,
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