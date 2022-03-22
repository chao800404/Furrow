/** @format */

import { combineReducers } from "redux";
import themeReducer from "./theme/theme.reducers";

const rootReducers = combineReducers({
  themeReducer,
});

export default rootReducers;
