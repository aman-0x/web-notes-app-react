import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";
import rootReducer from "./reducers/index";
import forbidden from "./middleware/index";
import thunk from "redux-thunk";
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store  = createStore(rootReducer, storeEnhancers(applyMiddleware(forbidden, thunk)));

export default store;