import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./components/App";
import reducer from "./reducers";
import { loadState, saveState } from "./support/localStorage";

const persistedState = loadState();
const store = createStore(reducer, persistedState);

store.subscribe(() => {
  saveState(store.getState());
});

export default () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
};
