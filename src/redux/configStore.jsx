import { applyMiddleware, combineReducers, createStore } from "redux";
import reduxSaga from "redux-saga";

const rootReducer = combineReducers({});

export const store = createStore(rootReducer, applyMiddleware(reduxSaga));
