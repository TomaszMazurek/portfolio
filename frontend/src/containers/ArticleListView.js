import React, { useEffect, useState } from "react";
import axios from "axios";
import Articles from "../components/Article";
import ArticleForm from "../components/Form";
import * as actions from "../store/actions/auth";
import { connect } from "react-redux";

const ArticleList = (props) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get(process.env.REACT_APP_ME_URL + "/api/").then((res) => {
      setArticles(res.data);
    });
  }, []);
  return (
    <div>
      <Articles data={articles} />
      {props.isAuthenticated ? (
        <React.Fragment>
          <br />
          <h2> Create an article </h2>
          <ArticleForm requestType="post" articleID={null} btnText="Create" />
        </React.Fragment>
      ) : null}
    </div>
  );
};

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
