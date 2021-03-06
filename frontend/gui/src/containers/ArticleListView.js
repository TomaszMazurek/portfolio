import React from "react";
import axios from "axios";
import Articles from "../components/Article";
import ArticleForm from "../components/Form";
import * as actions from "../store/actions/auth";
import { connect } from "react-redux";

class ArticleList extends React.Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    axios.get("/api/").then((res) => {
      this.setState({
        articles: res.data,
      });
    });
  }

  render() {
    return (
      <div>
        <Articles data={this.state.articles} />
        {this.props.isAuthenticated ? (
          <React.Fragment>
            <br />
            <h2> Create an article </h2>
            <ArticleForm requestType="post" articleID={null} btnText="Create" />
          </React.Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
