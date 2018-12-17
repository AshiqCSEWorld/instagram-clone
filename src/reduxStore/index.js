import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import auth from "./reducers/auth";
import createBrowserHistory from "history/createBrowserHistory";

export const customHistory = createBrowserHistory();

const reducers = combineReducers({ auth });

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducers, composeEnhancer(applyMiddleware(thunk)));
