/** @format */

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, lazy } from "react";
import { postActionStart } from "../../redux/post/post.actions";
import { selectPostData, selectPostYear } from "../../redux/post/post.select";
import primaryColor from "../../theme/priamry.styles";
import {
  NewsPageContainer,
  NewsPageLayout,
  NewsTitle,
  NewCardContainer,
  NewsSide,
  NewsSideItem,
  NewsSideContainer,
  NewsHiddenPostBar,
  NewsCardCotent,
  NewsBookMarkEmpty,
} from "./newsPage.styles";
import { Flex } from "../../components/Flex/flex.styles";
import NewsCard from "../../components/newsCard/newCard.component";
import { Routes, Route } from "react-router-dom";
import Select from "react-select";
import ToolTip from "../../components/tooltip/tooltip.component";
import { motion } from "framer-motion";
import useCheckScreenIsMobile from "../../utils/useCheckScreen";
import Button from "../../components/button/button.component";
import { selectThemeStyle } from "../../redux/theme/theme.select";
import { selectPostbookMark } from "../../redux/post/post.select";
import LottieContainer from "../../components/lotiie-player/Lottie-container.component";
import bookMarkEmptyAn from "../../assets/lottie-json/empty-bookmark.json";

const NewsOverPage = lazy(() =>
  import("../../components/news-overPage/newsOverPage.component")
);

const collapsePost = {
  largeHeight: "70rem",
  mediumHeight: "70rem",
};

const NewsPage = ({ headerAnComplete }) => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState({
    value: `${+new Date().getFullYear()}`,
    label: `${+new Date().getFullYear()}`,
  });
  const postData = useSelector(selectPostData(selectedOption));
  const [isActive, setIsActive] = useState(postData[0]?._id);
  const [showFullCardBtn, setShowFullCard] = useState({
    showCard: false,
    hiddenBtn: false,
  });
  const allPostYear = useSelector(selectPostYear);
  const [slugPageIsVisible, setSlugPageIsVisible] = useState(false);
  const isMobile = useCheckScreenIsMobile();
  const theme = useSelector(selectThemeStyle);
  const bookMarkPost = useSelector(selectPostbookMark);
  const checkOutBookMarkEmpty =
    selectedOption.value === "favorite" && bookMarkPost.length <= 0;

  const options = [
    ...allPostYear?.map((year) => ({
      value: +year,
      label: +year,
    })),
    { value: "favorite", label: "favorite" },
  ];

  useEffect(() => {
    if (headerAnComplete) dispatch(postActionStart());
  }, [dispatch, headerAnComplete]);

  useEffect(() => {
    if (selectedOption.value !== "favorite")
      setShowFullCard((prev) => (prev = { ...prev, hiddenBtn: false }));
    if (!isMobile || selectedOption.value !== "favorite") return;
    if (bookMarkPost.length < 5) {
      setShowFullCard((prev) => (prev = { ...prev, hiddenBtn: true }));
    }
  }, [bookMarkPost, selectedOption, isMobile]);

  const handleShowMore = (e) => {
    const showBtn = e.target.closest("[data-type=show-more]");
    if (showBtn) {
      setShowFullCard((prev) => (prev = { ...prev, showCard: !prev.showCard }));
    }
  };

  return (
    <>
      <NewsPageContainer>
        <Flex>
          {headerAnComplete && postData && (
            <NewsPageLayout>
              <NewsTitle>NEWS</NewsTitle>
              <NewCardContainer>
                <NewsCardCotent
                  style={
                    isMobile
                      ? {
                          height: `${
                            showFullCardBtn.showCard
                              ? "auto"
                              : checkOutBookMarkEmpty
                              ? "auto"
                              : collapsePost.largeHeight
                          }`,
                        }
                      : null
                  }
                >
                  {postData.map((post, index) => (
                    <NewsCard
                      key={post._id}
                      post={post}
                      unfold={false}
                      index={index}
                      length={postData.length}
                      id={post._id}
                      setIsActive={setIsActive}
                      isActive={isActive}
                      setSlugPageIsVisible={setSlugPageIsVisible}
                      // headerAnComplete={headerAnComplete}
                    />
                  ))}
                </NewsCardCotent>
                {isMobile &&
                  (!showFullCardBtn.hiddenBtn ? (
                    <NewsHiddenPostBar
                      style={
                        showFullCardBtn.showCard
                          ? { position: "static", height: "12rem" }
                          : null
                      }
                      theme={theme}
                      onClick={handleShowMore}
                    >
                      <Button
                        style={{
                          width: "20rem",
                          borderRadius: ".5rem",
                          backgroundColor: theme.backgroundColor,
                          color: theme.color,
                          fontWeight: 900,
                          border: `1px solid ${theme.color}`,
                          opacity: 0.8,
                        }}
                        data="show-more"
                      >
                        {showFullCardBtn.showCard ? "Collapse" : "Show more"}
                      </Button>
                    </NewsHiddenPostBar>
                  ) : null)}
              </NewCardContainer>
              <NewsSide>
                <div className="date-select" data-tip="" data-for="test">
                  <Select
                    value={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    placeholder={selectedOption}
                    isSearchable={false}
                  />
                </div>
                <ToolTip id="test">select date</ToolTip>

                <NewsSideContainer>
                  {postData.map((item) => (
                    <NewsSideItem
                      key={item._id}
                      onClick={() => setIsActive((prev) => (prev = item._id))}
                    >
                      <motion.h4
                        style={
                          item._id === isActive
                            ? { color: `${primaryColor.logoPointColor}` }
                            : { color: `${theme.color}` }
                        }
                        whileTap={{ scale: 0.9 }}
                      >
                        {item.title}
                      </motion.h4>
                      <span>{item._updatedAt}</span>
                    </NewsSideItem>
                  ))}
                </NewsSideContainer>
              </NewsSide>
              {checkOutBookMarkEmpty && (
                <NewsBookMarkEmpty>
                  <LottieContainer
                    lottieJson={bookMarkEmptyAn}
                    className="empty-bookmark"
                  />
                  <p>Not yet bookmarks in the post</p>
                </NewsBookMarkEmpty>
              )}
            </NewsPageLayout>
          )}
        </Flex>
      </NewsPageContainer>

      <Routes>
        <Route
          path=":slug"
          element={
            <NewsOverPage
              isActive={isActive}
              postData={postData}
              setSlugPageIsVisible={setSlugPageIsVisible}
              slugPageIsVisible={slugPageIsVisible}
            />
          }
        />
      </Routes>
    </>
  );
};

export default NewsPage;
