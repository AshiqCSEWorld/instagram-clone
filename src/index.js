import React from "react";
import { render } from "react-dom";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./containers/App";
import "./style.scss";
import store, { customHistory } from "reduxStore";

const intialBoot = () =>
  render(
    <Provider store={store}>
      <Router history={customHistory}>
        <App />
      </Router>
    </Provider>,
    document.getElementById("root")
  );

intialBoot();

if (module.hot) module.hot.accept("./containers/App", () => intialBoot());
