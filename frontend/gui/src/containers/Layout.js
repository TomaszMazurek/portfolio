import React from "react";
import {
  Layout,
  Menu,
  Breadcrumb,
  Affix,
  Avatar,
  Row,
  Col,
  Typography,
} from "antd";
import { Link, NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../store/actions/auth";
import { UserOutlined } from "@ant-design/icons";
const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const keyMap = {
  "/aboutme": "1",
  "/projects": "2",
  "/blog": "3",
  "/login": "4",
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
                  <p>Tomasz Mazurek | Portfolio Website</p>
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
                    <Link to="/aboutme">About Me</Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Link to="/projects">Projects</Link>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <Link to="/blog">Blog</Link>
                  </Menu.Item>
                  {this.props.isAuthenticated ? (
                    <Menu.Item key="4" onClick={this.props.logout}>
                      <Link to="/login">Logout</Link>
                    </Menu.Item>
                  ) : (
                    <Menu.Item key="4">
                      <Link to="/login">Login</Link>
                    </Menu.Item>
                  )}
                </Menu>
              </Col>
            </Row>
          </Header>
        </Affix>

        <Content id="content" style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>
              <Link to={this.props.location.pathname}>
                {this.props.location.pathname.split("/")[1]}
              </Link>
            </Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">{this.props.children}</div>
        </Content>
        <Footer id="footer" style={{ textAlign: "center" }}></Footer>
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

export default withRouter(connect(null, mapDispatchToProps)(MainLayout));