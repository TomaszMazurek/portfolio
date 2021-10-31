import React from "react";
import { Form, Input, Button, Spin, Result } from "antd";
import {
  LoadingOutlined,
  //QuestionCircleOutlined,
  UserOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { connect } from "react-redux";
import * as actions from "../store/actions/auth";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

class LoginForm extends React.Component {
  onFinish = (values) => {
    this.props.onAuth(values.username, values.password);
  };

  onFinishFailed = (errorInfo) => {};

  render() {
    let errorMesage = null;
    if (this.props.error) {
      errorMesage = <p>{this.props.error.message}</p>;
    }

    return (
      <div>
        {errorMesage}
        {this.props.isAuthenticated ? (
          <Result
            status="success"
            title="Successfully logged in"
            extra={[
              <Button
                type="primary"
                onClick={this.props.logout}
                style={{ margin: "auto", display: "block" }}
              >
                Logout
              </Button>,
            ]}
          />
        ) : this.props.loading ? (
          <Spin indicator={antIcon} />
        ) : (
          <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ marginRight: "10px" }}
              >
                Login
              </Button>
              {/* Or
              <NavLink style={{ marginRight: "10px" }} to="/signup/">
                {" "}
                Signup
              </NavLink> */}
            </Form.Item>
          </Form>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
    isAuthenticated: state.token != null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (username, password) =>
      dispatch(actions.authLogin(username, password)),
    logout: () => dispatch(actions.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
