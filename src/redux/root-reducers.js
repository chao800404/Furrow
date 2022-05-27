/** @format */

import { combineReducers } from "redux";
import headerReducer from "./header/header.reducer";
import themeReducer from "./theme/theme.reducers";
import cursorReducer from "./cursor/cursor.reducers";
import bannerReducer from "./banner/banner.reducer";
import sidebarReducer from "./sidebar/sidebar.reducer";
import articleReducer from "./article/article.reducer";
import shopReducer from "./shop/shop.reudcer";
import cardReducer from "./card/card.reducer";
import shopPageReducer from "./shopPage/shopPage.reducer";
import cartReducer from "./cart/cart.reducer";
import userReducer from "./user/user.reducer";
import aboutPageReducer from "./aboutPage/aboutPage.reducer";
import featureReducer from "./featuresPage/feature.reudcer";
import postReducer from "./post/post.reudcer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducers = combineReducers({
  header: headerReducer,
  theme: themeReducer,
  cursor: cursorReducer,
  banner: bannerReducer,
  sidebar: sidebarReducer,
  article: articleReducer,
  shop: shopReducer,
  card: cardReducer,
  shopPage: shopPageReducer,
  cart: cartReducer,
  user: userReducer,
  about: aboutPageReducer,
  feature: featureReducer,
  post: postReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["theme", "cart", "post", "about", "feature", "shop", "shopPage"],
};

const persistorReducer = persistReducer(persistConfig, rootReducers);

export default persistorReducer;
