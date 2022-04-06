import React, { useEffect } from "react";
import { connect } from "react-redux";
import "antd/dist/antd.css";
import "./App.css";
import MainLayout from "./common/components/Layout";
import { BrowserRouter } from "react-router-dom";
import BaseRouter from "./routes";
import * as actions from "./auth/store/actions/actionCreators";
import { Layout } from "antd";
import Logo from "./common/components/Logo";
import Menu from "./common/components/Menu";
const { Header, Footer } = Layout;

const App = (props) => {
  useEffect(() => {
    props.onTryAutoSignup();
  }, []);

  return (
    <BrowserRouter>
      <Header id="header" className="header">
        <Logo />
        <Menu />
      </Header>
      <MainLayout {...props}>
        <BaseRouter />
      </MainLayout>
      <Footer
        id="footer"
        style={{
          backgroundColor: "rgb(0,21,41)",
          color: "rgb(220,220,220,0.65)",
          textAlign: "center",
          fontSize: 20,
        }}
      >
        Tomasz Mazurek ©2022 Created by Tomasz Mazurek
      </Footer>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.token != null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
