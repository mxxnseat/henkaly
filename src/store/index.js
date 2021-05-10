import {createStore, applyMiddleware, combineReducers} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import reducer from "./reducers";



export const store = createStore(reducer)