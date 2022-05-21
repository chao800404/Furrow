/** @format */

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { postActionStart } from "../../redux/post/post.actions";
import { selectPostData, selectLatestPost } from "../../redux/post/post.select";
import {
  NewsPageContainer,
  NewsPageLayout,
  NewsTitle,
  NewCardContainer,
} from "./newsPage.styles";
import { Flex } from "../../components/Flex/flex.styles";
import NewsCard from "../../components/newsCard/newCard.component";
import NewsOverPage from "../../components/news-overPage/newsOverPage.component";
import { Routes, Route } from "react-router-dom";

const NewsPage = () => {
  const dispatch = useDispatch();
  const postData = useSelector(selectPostData);
  const latestPost = useSelector(selectLatestPost);
  const [isActive, setIsActive] = useState(null);

  useEffect(() => {
    setIsActive((prev) => (prev = latestPost?._id));
  }, [latestPost]);

  useEffect(() => {
    dispatch(postActionStart());
  }, [dispatch]);

  return (
    <>
      <NewsPageContainer>
        <Flex>
          <NewsPageLayout>
            <NewsTitle>NEWS</NewsTitle>
            <NewCardContainer>
              {/* {latestPost && <NewsCard post={latestPost} unfold={true} />} */}
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
                />
              ))}
            </NewCardContainer>
          </NewsPageLayout>
        </Flex>
      </NewsPageContainer>

      <Routes>
        <Route path=":slug" element={<NewsOverPage isActive={isActive} />} />
      </Routes>
    </>
  );
};

export default NewsPage;
