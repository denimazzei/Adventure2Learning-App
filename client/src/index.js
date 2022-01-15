import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

//import "assets/css/nucleo-icons.css";
//import "assets/scss/blk-design-system-react.scss?v=1.2.0";
//import "assets/demo/demo.css";

import Index from "../src/components/Index";
import LandingPage from "../src/components/LandingPage.js";
import RegisterPage from "../src/components/RegisterPage/RegisterPage.js";
//import ProfilePage from "../components/ProfilePage.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/components" render={(props) => <Index {...props} />} />
      <Route
        path="/landing-page"
        render={(props) => <LandingPage {...props} />}
      />
      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />

      <Redirect from="/" to="/components" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
