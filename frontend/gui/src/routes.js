import React from "react";
import { Route } from "react-router-dom";
import ArticleList from "./containers/ArticleListView";
import ArticleDetail from "./containers/ArticleDetailView";
import Login from "./containers/Login";
//import Signup from "./containers/Signup";
import AboutMe from "./containers/AboutMe";
import Projects from "./containers/Projects";
import Home from "./containers/Home";

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={Home} />{" "}
    <Route exact path="/aboutme/" component={AboutMe} />{" "}
    <Route exact path="/projects/" component={Projects} />{" "}
    <Route exact path="/blog/" component={ArticleList} />{" "}
    <Route exact path="/blog/:articleID" component={ArticleDetail} />{" "}
    <Route exact path="/login/" component={Login} />{" "}
    {/* <Route exact path="/signup/" component={Signup} />{" "} */}
  </div>
);

export default BaseRouter;
