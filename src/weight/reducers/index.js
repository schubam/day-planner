import { combineReducers } from "redux";
import weights from "./weights";

const weightTableApp = combineReducers({
  measurements: weights
});

export default weightTableApp;
