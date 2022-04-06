import React from "react";
import { Col } from "antd";

const Logo = () => {
  return (
    <div className="logo" style={{ marginLeft: "50px" }}>
      <Col
        flex="auto"
        style={{
          float: "left",
          width: "50%",
          height: "inherit",
          overflow: "hidden",
        }}
      >
        <span
          style={{
            color: "rgb(220,220,220,0.65)",
            float: "left",
            wordSpacing: "5px",
            fontFamily: "Tahoma, Geneva, sans-serif",
            fontWeight: "lighter",
            fontSize: 18,
          }}
        >
          Tom Mazurek | Portfolio Website
        </span>
      </Col>
    </div>
  );
};
export default Logo;
