import React from "react";
import cat_n_mouse from "../assets/media/cat_n_mouse.png";

function Home() {
  console.log("env REACT_APP_ME_URL : ", process.env);
  return (
    <div style={{ backgroundColor: "black", overflow: "hidden" }}>
      <img
        style={{ display: "block", margin: "auto", overflow: "hidden" }}
        id="me_ui"
        src={cat_n_mouse}
        alt="cat_mouse"
        width="50%"
      />
    </div>
  );
}

export default Home;
