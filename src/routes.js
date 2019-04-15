import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Dashboard from "./Components/Dashboard/Dashboard";
import Group from "./Components/Group/Group";
import Signup from "./Components/Signup/Signup";
import User from "./Components/User/User";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/group" component={Group} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/user" render={() => <User user_id={13} />} />
    <Route path="/user/:id" component={User} />
  </Switch>
);
