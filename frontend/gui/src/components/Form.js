import React from "react";
import { Form, Input, Button } from "antd";
import axios from "axios";

class ArticleForm extends React.Component {
  handleSubmit = (event, requestType, articleID) => {
    console.log("Submitting");

    const title = event.target.elements.title.value;
    const content = event.target.elements.content.value;

    switch (requestType) {
      case "post":
        axios
          .post("http://127.0.0.1:8000/api/", {
            title: title,
            content: content,
          })
          .then((res) => console.log(res))
          .catch((err) => console.error(err));
        break;
      case "put":
        axios
          .put(`http://127.0.0.1:8000/api/${articleID}/`, {
            title: title,
            content: content,
          })
          .then((res) => console.log(res))
          .catch((err) => console.err(err));
        break;
      default:
        return;
    }
    console.log(title, content);
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
          <Form.Item label="Title">
            <Input name="title" placeholder="Place title here..." />
          </Form.Item>
          <Form.Item label="Content">
            <Input name="content" placeholder="Place content here..." />
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

export default ArticleForm;
