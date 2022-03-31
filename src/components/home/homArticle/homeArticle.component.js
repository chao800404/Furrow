/** @format */

import { HomeArticleSection } from "./homeArticle.style";
import { Flex } from "../../Flex/flex.styles";
import HomeArticleItem from "../homeArticle-items/homeArticle-item.component";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { actionArticle } from "../../../redux/article/article.action";

const HomeArticle = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionArticle());
  }, [dispatch]);

  return (
    <Flex>
      <HomeArticleSection>
        <HomeArticleItem />
      </HomeArticleSection>
    </Flex>
  );
};

export default HomeArticle;
