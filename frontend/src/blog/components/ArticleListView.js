import React, { useEffect, useState } from "react";
import axios from "axios";
import Articles from "./Article";
import ArticleForm from "../../auth/components/Form";
import { useSelector } from "react-redux";
import { getIsAuthenticated } from "../../auth/store/selectors/authSelectors";
const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const isAuthenticated = useSelector((state) => getIsAuthenticated(state));

  useEffect(() => {
    axios.get(process.env.REACT_APP_BLOG_URL + "/api/").then((res) => {
      setArticles(res.data);
    });
  }, []);
  return (
    <div>
      <Articles data={articles} />
      {isAuthenticated ? (
        <React.Fragment>
          <br />
          <h2> Create an article </h2>
          <ArticleForm requestType="post" articleID={null} btnText="Create" />
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default ArticleList;
