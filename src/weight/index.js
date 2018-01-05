import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./components/WeightTable";
import reducer from "./reducers";

const store = createStore(reducer);

export default () => {
  let DATA = [];
  for (let i = 0; i < 2; i++) {
    DATA.push({
      week: i,
      label: `Week ${i + 1} (XX.XX.2018 - XX.XX.2018)`,
      monday: 123.9,
      tuesday: 123.8,
      wednesday: 123.7,
      thursday: 123.6,
      friday: 123.5,
      saturday: 123.4,
      sunday: 123.3
    });
  }
  const COLUMNS = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday"
    // "Average",
    // "Median",
    // "Delta",
    // "BMI"
  ];

  ReactDOM.render(
    <Provider store={store}>
      <App weeks={DATA} columns={COLUMNS} />
    </Provider>,
    document.getElementById("root")
  );
};
