import React from "react";
import Home from "../containers/Home";
import { Layout, Menu, Breadcrumb, Affix, Row, Col, Typography } from "antd";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../store/actions/auth";
const { Header, Content, Footer } = Layout;
const { Title } = Typography;

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
            <Row>
              <Col span={8}>
                <Title
                  level={2}
                  style={{
                    color: "rgb(220,220,220,0.65)",
                    textAlign: "left",
                    paddingTop: "17px",
                    wordSpacing: "5px",
                    textShadow: "2px 2px 5px dark-blue",
                    fontFamily: "Tahoma, Geneva, sans-serif",
                    fontWeight: "lighter",
                    fontSize: "20px",
                  }}
                >
                  <p>Tom Mazurek | Portfolio Website</p>
                </Title>
              </Col>
              <Col span={8} offset={8}>
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
                      href="http://192.168.56.102/materialEditor/"
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
        {this.props.location.pathname === "/" ? (
          <Home />
        ) : (
          <Content
            id="content"
            style={{
              padding: "0 30em 4.1em",
              backgroundColor: "rgb(220,220,220,0.65)",
            }}
          >
            <Breadcrumb style={{ margin: "16px 0" }}>
              {this.createBreadCrumbItems()}
            </Breadcrumb>
            <div className="site-layout-content">{this.props.children}</div>
          </Content>
        )}
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
