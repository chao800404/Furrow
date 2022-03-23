/** @format */

import persistorReducer from "./root-reducers";
import { persistStore } from "redux-persist";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

const middleWare = [];

if (process.env.NODE_ENV !== "production") middleWare.push(logger);

export const store = createStore(
  persistorReducer,
  applyMiddleware(...middleWare)
);
export const persistor = persistStore(store);
