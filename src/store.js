import {createStore, combineReducers, applyMiddleware} from "redux";
import { createPromise } from "redux-promise-middleware";
import thunk from "redux-thunk";

import venta from "./reducers/ventaReducer";

export default createStore(
    combineReducers({
        venta
    }),
    {},
    applyMiddleware(createPromise(), thunk)
);