import React from "react";
import { Form, Input, Button } from "antd";
import axios from "axios";
import * as actions from "../store/actions/auth";
import { connect } from "react-redux";

const { TextArea } = Input;

class ArticleForm extends React.Component {
  handleSubmit = (event, requestType, articleID) => {
    const title = event.target.elements.title.value;
    const content = event.target.elements.content.value;
    console.log(localStorage.getItem("token"));
    switch (requestType) {
      case "post":
        axios
          .post(
            "/api/",
            {
              title: title,
              content: content,
            },
            {
              headers: {
                Authorization: "Token " + localStorage.getItem("token"),
              },
            }
          )
          .catch((err) => {
            console.error(err);
          });
        break;
      case "put":
        axios
          .put(
            "/api/" + articleID + "/",
            {
              title: title,
              content: content,
            },
            {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Token " + localStorage.getItem("token"),
              },
            }
          )
          .catch((err) => console.err(err));
        break;
      default:
        return;
    }
  };

  render() {
    return (
      <div>
        <form
          onSubmit={(event) =>
            this.handleSubmit(
              event,
              this.props.requestType,
              this.props.articleID
            )
          }
        >
          <Form.Item>
            <Input name="title" placeholder="Place title here..." />
          </Form.Item>
          <Form.Item>
            <TextArea
              rows={4}
              name="content"
              placeholder="Place content here..."
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {this.props.btnText}
            </Button>
          </Form.Item>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.token != null,
    token: state.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleForm);
