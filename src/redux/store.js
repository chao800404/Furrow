/** @format */

import rootReducers from "./root-reducers";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

const middleWare = [logger];

const store = createStore(rootReducers, applyMiddleware(...middleWare));

export default store;
