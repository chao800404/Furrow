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

const NewsOverPage = lazy(() =>
  import("../../components/news-overPage/newsOverPage.component")
);

const NewsPage = () => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState({
    value: `${+new Date().getFullYear()}`,
    label: `${+new Date().getFullYear()}`,
  });
  const postData = useSelector(selectPostData(selectedOption));
  const [isActive, setIsActive] = useState(postData[0]?._id);
  const [showFullCard, setShowFullCard] = useState(false);
  const allPostYear = useSelector(selectPostYear);
  const [slugPageIsVisible, setSlugPageIsVisible] = useState(false);
  const isMobile = useCheckScreenIsMobile();
  const theme = useSelector(selectThemeStyle);

  const options = [
    ...allPostYear?.map((year) => ({
      value: +year,
      label: +year,
    })),
    { value: "favorite", label: "favorite" },
  ];

  useEffect(() => {
    dispatch(postActionStart());
  }, [dispatch]);

  const handleShowMore = (e) => {
    const showBtn = e.target.closest("[data-type=show-more]");
    if (showBtn) {
      setShowFullCard((prev) => !prev);
    }
  };

  return (
    <>
      <NewsPageContainer>
        <Flex>
          <NewsPageLayout>
            <NewsTitle>NEWS</NewsTitle>
            <NewCardContainer
              style={{ height: `${showFullCard ? "auto" : "60rem"}` }}
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
                />
              ))}
              {isMobile && (
                <NewsHiddenPostBar
                  style={
                    showFullCard ? { position: "static", height: "6rem" } : null
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
                    {showFullCard ? "Collapse" : "Show more"}
                  </Button>
                </NewsHiddenPostBar>
              )}
            </NewCardContainer>
            <NewsSide>
              <div className="date-select" data-tip="" data-for="test">
                <Select
                  value={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                  placeholder={selectedOption}
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
                          : { color: "#fff" }
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
          </NewsPageLayout>
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
