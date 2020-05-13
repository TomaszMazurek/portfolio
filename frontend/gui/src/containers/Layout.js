import React from "react";
import Home from "../containers/Home";
import { Layout, Menu, Breadcrumb, Affix, Row, Col, Typography } from "antd";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../store/actions/auth";
const { Header, Content, Footer } = Layout;
const { Text } = Typography;

const keyMap = {
  "/": "1",
  "/aboutme": "2",
  "/projects": "3",
  "/blog": "4",
  "/login": "5",
};

class MainLayout extends React.Component {
  state = {
    key: "1",
  };

  handleClick = (event) => {
    this.setState({
      key: event.key,
    });
  };

  createBreadCrumbItems() {
    const paths = this.props.location.pathname.split("/");
    const items = [];
    for (let i = 0; i < paths.length; i++) {
      items.push(
        <Breadcrumb.Item key={i}>
          <Link to={"/" + paths[i]}>{paths[i]}</Link>
        </Breadcrumb.Item>
      );
    }
    return items;
  }
  render() {
    let selectedKey = [keyMap[this.props.location.pathname]];
    return (
      <Layout id="layout" className="layout">
        <Affix>
          <Header id="header">
            <div className="logo" />
            <Row style={{ gridRowGap: "20px" }}>
              <Col
                flex="300px"
                style={{ float: "left", width: "50%", height: "10%" }}
              >
                <span
                  style={{
                    color: "rgb(220,220,220,0.65)",
                    float: "left",
                    wordSpacing: "5px",
                    fontFamily: "Tahoma, Geneva, sans-serif",
                    fontWeight: "lighter",
                    fontSize: 17,
                  }}
                >
                  Tom Mazurek | Portfolio Website
                </span>
              </Col>
              <Col
                flex="auto"
                style={{ float: "right", width: "50%", height: "10%" }}
              >
                <Menu
                  theme="dark"
                  mode="horizontal"
                  selectedKeys={selectedKey}
                  onClick={this.handleClick}
                  style={{ textAlign: "right" }}
                >
                  <Menu.Item key="1">
                    <Link to="/">Home</Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Link to="/aboutme">About Me</Link>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <Link to="/projects">Projects</Link>
                  </Menu.Item>
                  <Menu.Item key="4">
                    <Link to="/blog">Blog</Link>
                  </Menu.Item>
                  <Menu.Item key="6">
                    <a
                      target="_blank"
                      href="http://tommazurek.rocks/materialEditor/"
                      rel="noopener noreferrer"
                    >
                      Material Editor
                    </a>
                  </Menu.Item>
                  {this.props.isAuthenticated ? (
                    <Menu.Item key="5" onClick={this.props.logout}>
                      <Link to="/login">Logout</Link>
                    </Menu.Item>
                  ) : (
                    <Menu.Item key="5">
                      <Link to="/login">Login</Link>
                    </Menu.Item>
                  )}
                </Menu>
              </Col>
            </Row>
          </Header>
        </Affix>
        <Row style={{ borderCollapse: "collapse", gridRowGap: "50px" }}>
          {this.props.location.pathname === "/" ? (
            <Col
              flex="auto"
              style={{ float: "center", width: "100%", height: "80%" }}
            >
              <Home />
            </Col>
          ) : (
            <Col
              flex="auto"
              style={{
                float: "center",
                width: "100%",
                height: "80%",
                marginTop: "25px",
              }}
            >
              <Content
                id="content"
                style={{
                  boxSizing: "border-box",
                  margin: "40px 15% 20px",
                  backgroundColor: "rgb(220,220,220,0.65)",
                }}
              >
                <Breadcrumb
                  style={{
                    margin: "16px 0",
                  }}
                >
                  {this.createBreadCrumbItems()}
                </Breadcrumb>
                <div
                  className="site-layout-content"
                  style={{ minWidth: "250px" }}
                >
                  {this.props.children}{" "}
                </div>
              </Content>
            </Col>
          )}
        </Row>
        <Row style={{ borderCollapse: "collapse", gridRowGap: "50px" }}>
          <Col flex="100%" style={{ width: "100%", height: "10%" }}>
            <Footer
              id="footer"
              style={{
                backgroundColor: "rgb(0,21,41)",
                color: "rgb(220,220,220,0.65)",
                textAlign: "center",
              }}
            >
              Tomasz Mazurek ©2020 Created by Tomasz Mazurek
            </Footer>
          </Col>
        </Row>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MainLayout)
);
