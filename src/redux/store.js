/** @format */

import persistorReducer from "./root-reducers";
import { persistStore } from "redux-persist";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

const middleWare = [sagaMiddleware];

if (process.env.NODE_ENV !== "production") middleWare.push(logger);

const store = createStore(persistorReducer, applyMiddleware(...middleWare));

sagaMiddleware.run(rootSaga);
const persistor = persistStore(store);
export { store, persistor };
