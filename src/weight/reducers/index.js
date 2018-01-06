import { combineReducers } from "redux";
import days from "./days";

const weightTableApp = combineReducers({
  weeks: days,
  columns: days,
});

export default weightTableApp;
