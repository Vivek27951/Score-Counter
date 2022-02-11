import { combineReducers } from "redux";
import counter from "./reducers";

const allReducer = combineReducers({
  counter: counter,
});

export default allReducer;
