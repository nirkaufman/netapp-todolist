import {applyMiddleware, combineReducers, createStore, compose} from "redux";
import {listReducer} from "./reducers/list.reducer";
import {loadingReducer} from "./reducers/loading.reducer";
import {listMiddleware} from "./middleware/list.middleware";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  items: listReducer,
  loading: loadingReducer,
  // user: state => state,
})

export const store = createStore(rootReducer,
    composeEnhancers(applyMiddleware(listMiddleware)));
