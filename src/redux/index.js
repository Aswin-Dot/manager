import { combineReducers, createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import authReducer from "./auth/reducers";
import employeeReducer from "./employee/reducers";

const reducers = combineReducers({
  auth: authReducer,
  employee: employeeReducer
});

export default store = createStore(reducers, {}, applyMiddleware(ReduxThunk));