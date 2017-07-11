import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Home from "./pages/Home";
import Assistant from "./pages/Assistant";
import Contribute from "./pages/Contribute";
import About from "./pages/About";
import Main from "./pages/Main";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="assistant" name="Assistant" component={Assistant}></Route>
      <Route path="contribute" name="Contribute" component={Contribute}></Route>
      <Route path="about" name="About" component={About}></Route>
    </Route>
  </Router>,
app);
