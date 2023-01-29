import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import * as History from "history";

import App from "./App";
import "./index.css";

const history = History.createBrowserHistory();
ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById("root")
);
