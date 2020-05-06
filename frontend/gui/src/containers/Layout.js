import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { Link, NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../store/actions/auth";

const { Header, Content } = Layout;

class MainLayout extends React.Component {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
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
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/">List</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">{this.props.children}</div>
        </Content>
      </Layout>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(MainLayout));
