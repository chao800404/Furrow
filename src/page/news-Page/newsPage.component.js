/** @format */

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { postActionStart } from "../../redux/post/post.actions";
import { selectPostData, selectLatestPost } from "../../redux/post/post.select";
import {
  NewsPageContainer,
  NewsPageLayout,
  NewsTitle,
} from "./newsPage.styles";
import { Flex } from "../../components/Flex/flex.styles";
import NewsCard from "../../components/newsCard/newCard.component";

const NewsPage = () => {
  const dispatch = useDispatch();
  const postData = useSelector(selectPostData);
  const latestPost = useSelector(selectLatestPost);

  console.log(latestPost);

  useEffect(() => {
    dispatch(postActionStart());
  }, [dispatch]);

  return (
    <NewsPageContainer>
      <Flex>
        <NewsPageLayout>
          <NewsTitle>NEWS</NewsTitle>
          {latestPost && <NewsCard latestPost={latestPost} />}
        </NewsPageLayout>
      </Flex>
    </NewsPageContainer>
  );
};

export default NewsPage;
