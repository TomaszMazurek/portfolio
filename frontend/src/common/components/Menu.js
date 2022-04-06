import React from "react";
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import * as actions from "../../auth/store/actions/actionCreators";
import { connect } from "react-redux";

const MenuComponent = (props) => {
  const { pathname } = useLocation();
  const keyMap = {
    "/": "1",
    "/aboutme": "2",
    "/projects": "3",
    "/blog": "4",
    "/login": "5",
    "/materialEditor": "6",
  };

  let selectedKey = [keyMap[pathname]];

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      selectedKeys={selectedKey}
      style={{
        float: "right",
        fontSize: 17,
        marginRight: "50px",
      }}
    >
      <Menu.Item key="1">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/aboutme">About Me</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/projects/">Projects</Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="/blog">Blog</Link>
      </Menu.Item>
      <Menu.Item key="6">
        <Link to="/materialEditor">Material Editor</Link>
      </Menu.Item>
      {props.isAuthenticated ? (
        <Menu.Item key="5" onClick={props.logout}>
          <Link to="/login">Logout</Link>
        </Menu.Item>
      ) : (
        <Menu.Item key="5">
          <Link to="/login">Login</Link>
        </Menu.Item>
      )}
    </Menu>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()),
  };
};

export default connect(mapDispatchToProps)(MenuComponent);
