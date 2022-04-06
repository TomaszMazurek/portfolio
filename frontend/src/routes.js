import React from "react";
import { Route, Routes } from "react-router-dom";
import ArticleList from "./blog/components/ArticleListView";
import ArticleDetail from "./blog/components/ArticleDetailView";
import Login from "./auth/components/Login";
//import Signup from "./scene/Signup";

import AboutMe from "./about/containers/AboutMe";
import Projects from "./projects/components/Projects";
import Canvas from "./materialEditor/scene/components/Canvas";
import Home from "./home/components/Home";

const BaseRouter = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />{" "}
    <Route exact path="/aboutme/" element={<AboutMe />} />{" "}
    <Route exact path="/projects/" element={<Projects />} />{" "}
    <Route exact path="/blog/" element={<ArticleList />} />{" "}
    <Route exact path="/blog/:articleID" element={<ArticleDetail />} />{" "}
    <Route exact path="/materialEditor/" element={<Canvas />} />{" "}
    <Route exact path="/login/" element={<Login />} />{" "}
    {/* <Route exact path="/signup/" element={Signup} />{" "} */}
  </Routes>
);

export default BaseRouter;
