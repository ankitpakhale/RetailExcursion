import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import "./bootstrap.min.css";
// import "./bootstrap.min.lux.css";
// import "./bootstrap.min.minty.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Redux setup start
import { Provider } from "react-redux";
import store from "./store";
// Redux setup end

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
