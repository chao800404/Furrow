/** @format */

import { createSelector } from "reselect";

const destructor = (data) => {
  return data.map((data) => ({ id: data.id, title: data.title }));
};

const selectArticle = ({ article }) => article;

export const selectSideArticle = createSelector([selectArticle], (article) =>
  article.data.reduce((prev, next) => {
    const { name, id, toggle } = next;
    const { article: articles } = next;
    const data = destructor(articles);
    prev = [...prev, { name, id, data, toggle }];
    return prev;
  }, [])
);

export const selectNavBarArticle = createSelector(
  [selectArticle],
  (article) => {
    const Article = article.data.reduce((prev, next) => {
      const { article } = next;
      prev = [...prev, ...article];
      return prev;
    }, []);
    return Article[article.chooseTarget - 1];
  }
);
