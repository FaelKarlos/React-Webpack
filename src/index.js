"use strict";

import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
//import Title from "./app";
import App from "./app";

/*var React = require('react')
var ReactDOM = require('react-dom')
var Title = require('./app')*/

const renderApp = NextApp => {
  render(
    <AppContainer>
      <App />
    </AppContainer>,
    //React.createElement(Title),
    document.querySelector('[data-js="app"]')
  );
};

renderApp(App);

//console.log(sum(5,7))

if (module.hot) {
  module.hot.accept("./app.js", () => {
    const NextApp = require("./app").default;
    renderApp(NextApp);
  });
}
