import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./state/store";
import Router from "./Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);
