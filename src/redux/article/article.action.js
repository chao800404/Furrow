/** @format */

import ArticleType from "./article.type";

export const actionArticle = () => ({
  type: ArticleType.ACTION_ARTICLE,
});

export const actionTargetNav = (target) => ({
  type: ArticleType.CHOOSE_TARGET,
  payload: target,
});

export const actionToggleNav = (toggleNav) => ({
  type: ArticleType.TOGGLE_NAV,
  payload: toggleNav,
});
