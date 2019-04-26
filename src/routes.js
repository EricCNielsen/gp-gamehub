import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Dashboard from "./Components/Dashboard/Dashboard";
import User from "./Components/User/User";
import Group from "./Components/Group/Group";
import Post from "./Components/Post/Post";
import GamingNews from "./Components/GamingNews/GamingNews";
import InGroupMini from "./Components/Group/InGroupMini";
import Search from "./Components/Search/Search";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route exact path="/dashboard" component={Dashboard} />
    {/* <Route exact path="/user" component={User} /> */}
    <Route path="/group/:id/ingroupmini" component={InGroupMini} />
    <Route path="/group/:id" component={Group} />
    <Route path="/user/:id" component={User} />
    <Route path="/gamingnews" component={GamingNews} />
    <Route path="/post/:id" component={Post} />
    <Route path="/search" component={Search} />
  </Switch>
);
