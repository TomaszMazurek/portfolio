import React from "react";
import axios from "axios";
import { Button, Card, Typography } from "antd";
import ArticleForm from "../components/Form";
import * as actions from "../store/actions/auth";
import { connect } from "react-redux";

const { Title, Paragraph, Text } = Typography;

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
    axios.delete(`/api/${articleID}/`, {
      headers: { Authorization: "Token " + localStorage.getItem("token") },
    });
    axios.Redirect("/blog");
  };

  render() {
    return (
      <div>
        <Title>{this.state.article.title}</Title>
        <Typography>
          <Paragraph
            style={{
              textAlign: "left",
              paddingTop: "17px",
              wordSpacing: "5px",
              textShadow: "2px 2px 5px dark-blue",
              fontFamily: "Tahoma, Geneva, sans-serif",
              fontWeight: "lighter",
              fontSize: "17px",
            }}
          >
            {" "}
            {this.state.article.content}
          </Paragraph>
          <Paragraph>
            {" "}
            {this.state.article.created_date
              ? this.state.article.created_date.split("T")[0] +
                " / " +
                this.state.article.created_date.split("T")[1].split(".")[0]
              : null}
          </Paragraph>
        </Typography>
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
    token: state.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetail);
