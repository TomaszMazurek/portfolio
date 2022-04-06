import React, { useEffect } from "react";
import Home from "../../home/components/Home";
import { Layout, Breadcrumb, Row, Col } from "antd";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import Canvas from "../../materialEditor/scene/components/Canvas";
import Sider from "../../materialEditor/ui/components/Sider";
import * as authActions from "../../auth/store/actions/actionCreators";
import * as layoutActions from "../store/actions/actionsCreators";

const { Content } = Layout;

const MainLayout = (props) => {
  const { pathname } = useLocation();
  const { setContentDimensions } = props;
  const createBreadCrumbItems = () => {
    const paths = pathname?.split("/") || "/";
    const items = [];
    for (let i = 0; i < paths.length; i++) {
      items.push(
        <Breadcrumb.Item key={i} style={{ fontSize: 16 }}>
          <Link to={"/" + paths[i]}>{paths[i]}</Link>
        </Breadcrumb.Item>
      );
    }
    return items;
  };

  useEffect(() => {
    const headerEl = document.getElementById("header");
    const headerStyle = window.getComputedStyle(headerEl, null);
    const headerHeight = headerStyle.getPropertyValue("height");
    const footerEl = document.getElementById("footer");
    const footerStyle = window.getComputedStyle(footerEl, null);
    const footerHeight = footerStyle.getPropertyValue("height");
    const contentWidth = window.innerWidth - 160;
    const contentHeight =
      window.innerHeight -
      parseInt(headerHeight.replace(/px/, "")) -
      parseFloat(footerHeight.replace(/px/, ""));

    setContentDimensions({
      width: contentWidth,
      height: contentHeight,
    });
  }, [setContentDimensions]);

  return (
    <Layout id="layout" className="layout">
      {pathname === "/materialEditor" ? (
        <Layout id="scene-layout" className="layout">
          <Sider side={"left"} />
          <Canvas />
          <Sider side={"right"} />
        </Layout>
      ) : (
        <Row style={{ borderCollapse: "collapse" }}>
          {pathname === "/" ? (
            <Col
              flex="auto"
              style={{ float: "center", width: "100%", height: "80%" }}
            >
              <Home />
            </Col>
          ) : (
            <Col
              flex="auto"
              style={{
                float: "center",
                width: "100%",
                height: "80%",
              }}
            >
              <Content
                id="content"
                style={{
                  boxSizing: "border-box",
                  margin: `0 20% ${pathname === "/blog" ? "28.5%" : "150px"}`,
                }}
              >
                <Breadcrumb
                  style={{
                    display: "flex",
                    padding: "1em 0",
                  }}
                >
                  {createBreadCrumbItems()}
                </Breadcrumb>
                <div
                  className="site-layout-content"
                  style={{
                    minWidth: "250px",
                    padding: "5% 10%",
                  }}
                >
                  {props.children}{" "}
                </div>
              </Content>
            </Col>
          )}
        </Row>
      )}
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(authActions.authCheckState()),
    setContentDimensions: ({ width, height }) => {
      dispatch(layoutActions.setLayoutDimensions({ width, height }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
