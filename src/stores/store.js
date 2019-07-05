import {createStore, applyMiddleware, compose} from "redux";
import thunkMiddleware from "redux-thunk";
import loggerMiddleware from "redux-logger";
import devTools from "redux-devtools";
import reducers from "../reducers";

const NODE_ENV = process.env.NODE_ENV;

const middleWares = NODE_ENV === "development" ? [
    thunkMiddleware,
    loggerMiddleware
] : [
    thunkMiddleware
];

const configStore = NODE_ENV === "development" ? (
    applyMiddleware(...middleWares)(createStore)
) : (
    compose(
        applyMiddleware(...middleWares),
        devTools.instrument(),
        devTools.persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    )(createStore)
);

export default configStore(reducers, []);