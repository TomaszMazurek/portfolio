import React from "react";
import axios from "axios";
import { Button, Card } from "antd";
import ArticleForm from "../components/Form";
import * as actions from "../store/actions/auth";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class ArticleDetail extends React.Component {
  state = {
    article: {},
  };

  componentDidMount() {
    const articleID = this.props.match.params.articleID;
    axios.get(`/api/${articleID}`).then((res) => {
      this.setState({
        article: res.data,
      });
    });
  }

  handleDelete = (event) => {
    const articleID = this.props.match.params.articleID;
    axios.delete(`/api/${articleID}`);
    axios.Redirect("/blog");
  };

  render() {
    return (
      <div>
        <Card title={this.state.article.title}>
          <p> {this.state.article.content}</p>
          <p>
            {" "}
            {this.state.article.created_date
              ? this.state.article.created_date.split("T")[0] +
                " / " +
                this.state.article.created_date.split("T")[1].split(".")[0]
              : null}
          </p>
        </Card>
        {this.props.isAuthenticated ? (
          <div>
            <br />
            <ArticleForm
              requestType="put"
              articleID={this.props.match.params.articleID}
              btnText="Update"
            />
            <form onSubmit={this.handleDelete}>
              <Button type="danger" htmlType="submit">
                Delete
              </Button>
            </form>
          </div>
        ) : null}
      </div>
    );
  }
}
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

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetail);
