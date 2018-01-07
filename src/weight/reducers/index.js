import { combineReducers } from "redux";
import weights from "./weights";

const weightTableApp = combineReducers({
  weeks: weights
});

export default weightTableApp;
