import { combineReducers, createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import authReducer from "./auth/reducers";
import employeeReducer from "./employee/reducers";
import employeeListReducer from "./employeeList/reducers";

const reducers = combineReducers({
  auth: authReducer,
  employee: employeeReducer,
  employeeList: employeeListReducer
});

export default store = createStore(reducers, {}, applyMiddleware(ReduxThunk));