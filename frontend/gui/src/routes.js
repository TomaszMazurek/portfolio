import React from "react";
import { Route, Switch } from "react-router-dom";
import ArticleList from "./containers/ArticleListView";
import ArticleDetail from "./containers/ArticleDetailView";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import AboutMe from "./containers/AboutMe";
import Projects from "./containers/Projects";
import MaterialEditor from "./MaterialEditor/MaterialEditor";

const BaseRouter = () => (
  <div>
    {/*     <Route exact path="/aboutme/" component={AboutMe} />{" "}
    <Route exact path="/projects/" component={Projects} />{" "}
    <Route exact path="/blog/" component={ArticleList} />{" "}
    <Route exact path="/blog/:articleID" component={ArticleDetail} />{" "}
    <Route exact path="/login/" component={Login} />{" "}
    <Route exact path="/signup/" component={Signup} />{" "} */}
    <Switch>
      <Route exact path="/aboutme/">
        <AboutMe />
      </Route>
      <Route exact path="/projects/">
        <Projects />
      </Route>
      <Route exact path="/blog/">
        <ArticleList />
      </Route>
      <Route exact path="/blog/:articleID">
        <ArticleDetail />
      </Route>
      <Route exact path="/login/">
        <Login />
      </Route>
      <Route exact path="/signup/">
        <Signup />
      </Route>
    </Switch>
  </div>
);

export default BaseRouter;
