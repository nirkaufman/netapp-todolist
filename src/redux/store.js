import {combineReducers, createStore} from "redux";
import {listReducer} from "./reducers/list.reducer";
import {loadingReducer} from "./reducers/loading.reducer";

const rootReducer = combineReducers({
  items: listReducer,
  loading: loadingReducer,
  // user: state => state,
})

export const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
