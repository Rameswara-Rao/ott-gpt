import React from "react";
import ReactDOM from "react-dom/client";
import appStore from "./store/appStore";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Provider store={appStore}>
      <App />
    </Provider>
  </>
);

reportWebVitals();
