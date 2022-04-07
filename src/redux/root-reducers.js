/** @format */

import { combineReducers } from "redux";
import themeReducer from "./theme/theme.reducers";
import cursorReducer from "./cursor/cursor.reducers";
import bannerReducer from "./banner/banner.reducer";
import sidebarReducer from "./sidebar/sidebar.reducer";
import articleReducer from "./article/article.reducer";
import shopReducer from "./shop/shop.reudcer";
import cardReducer from "./card/card.reducer";
import shopPageReducer from "./shopPage/shopPage.reducer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducers = combineReducers({
  theme: themeReducer,
  cursor: cursorReducer,
  banner: bannerReducer,
  sidebar: sidebarReducer,
  article: articleReducer,
  shop: shopReducer,
  card: cardReducer,
  shopPage: shopPageReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["theme"],
};

const persistorReducer = persistReducer(persistConfig, rootReducers);

export default persistorReducer;
