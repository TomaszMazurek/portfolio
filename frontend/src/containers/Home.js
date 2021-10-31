import React from "react";

class Home extends React.Component {
  //state = {};
  render() {
    return (
      <div style={{ backgroundColor: "black", overflow: "hidden" }}>
        <img
          style={{ display: "block", margin: "auto", overflow: "hidden" }}
          id="me_ui"
          src={process.env.PUBLIC_URL + "/static/media/cat_n_mouse.png"}
          alt="cat_mouse"
          width="50%"
        ></img>
      </div>
    );
  }
}

export default Home;
