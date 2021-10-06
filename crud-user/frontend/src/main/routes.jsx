import React from "react";
import { Switch, Route, Redirect } from "react-router";

import Home from "./../components/page/home";
import User from "./../components/page/user";

const Routes = (props) => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/users" component={User} />
    <Redirect from="*" to="/" />
  </Switch>
);

export default Routes;
