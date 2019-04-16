import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Dashboard from "./Components/Dashboard/Dashboard";
import GroupMini from "./Components/Group/GroupMini";
import Signup from "./Components/Signup/Signup";
import User from "./Components/User/User";
import Post from "./Components/Group/Post";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/group" component={GroupMini} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/user" component={User} />
    <Route path="/group/post" component={Post} />
    <Route path="/user/:id" component={User} />
  </Switch>
);
