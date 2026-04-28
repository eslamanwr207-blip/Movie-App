import { createStore, applyMiddleware } from "redux";

import { movesReducer } from "../reducer/movesReducer";
// most install thunk  npm install redux-thunk
import { thunk } from "redux-thunk";
export const store = createStore(movesReducer,applyMiddleware(thunk))