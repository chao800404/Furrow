/** @format */

import ArticleType from "./article.type";

import data from "./homeArtucle.data";

const INITIAL_STATE = {
  data,
  chooseTarget: 1,
};

const articleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ArticleType.ACTION_ARTICLE:
      return {
        ...state,
      };

    case ArticleType.TOGGLE_NAV:
      const toToggle = state.data.map((nav) =>
        nav.name === action.payload
          ? { ...nav, toggle: true }
          : { ...nav, toggle: false }
      );

      return {
        ...state,
        data: toToggle,
      };

    case ArticleType.CHOOSE_TARGET:
      return {
        ...state,
        chooseTarget: action.payload,
      };

    default:
      return state;
  }
};

export default articleReducer;
