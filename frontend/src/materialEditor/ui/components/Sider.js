import React from "react";
import { Menu, Layout } from "antd";
import { ReactComponent as MaterialSvg } from "../../../../assets/icons/material.svg";
import { ReactComponent as MeshSvg } from "../../../../assets/icons/3d-box.svg";
import { ReactComponent as LightSvg } from "../../../../assets/icons/light-bulb.svg";
import { ReactComponent as TextureSvg } from "../../../../assets/icons/texture-wall.svg";
import { ReactComponent as BackgroundSvg } from "../../../../assets/icons/background.svg";
import useShapes from "../hooks/useShapes";
const { SubMenu } = Menu;
const { Sider } = Layout;

const SiderComponent = (props) => {
  const { side } = props;
  const {
    setSphereShape,
    setCubeShape,
    setTetrahedronShape,
    setOctahedronShape,
  } = useShapes();
  return (
    <Sider
      id={`sider-${side}`}
      width={200}
      theme={"dark"}
      defaultCollapsed={true}
      className="site-layout-background"
      onCollapse={(...args) => console.log("sider onCollapse: args", args)}
    >
      <Menu
        mode="vertical"
        defaultSelectedKeys={["1"]}
        theme={"dark"}
        style={{ marginTop: "20px" }}
      >
        <SubMenu
          key="sub2"
          icon={<MeshSvg height="1.7rem" width="1.7rem" />}
          title="Shapes"
          style={{ marginTop: "30px" }}
        >
          <Menu.Item key="5" onClick={() => setSphereShape()}>
            Sphere
          </Menu.Item>
          <Menu.Item key="6" onClick={() => setCubeShape()}>
            Cube
          </Menu.Item>
          <Menu.Item key="7" onClick={() => setTetrahedronShape()}>
            Tetrahedron
          </Menu.Item>
          <Menu.Item key="8" onClick={() => setOctahedronShape()}>
            Octagonal
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub1"
          icon={<MaterialSvg height="1.7rem" width="1.7rem" />}
          title="Material"
          style={{ marginTop: "30px" }}
        >
          <Menu.Item key="1">Phong</Menu.Item>
          <Menu.Item key="2">PBR</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub3"
          icon={<LightSvg height="1.7rem" width="1.7rem" />}
          title="Light"
          style={{ marginTop: "30px" }}
        >
          <Menu.Item key="9">option1</Menu.Item>
          <Menu.Item key="10">option2</Menu.Item>
          <Menu.Item key="11">option3</Menu.Item>
          <Menu.Item key="12">option4</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub4"
          icon={<TextureSvg height="1.7rem" width="1.7rem" />}
          title="Textures"
          style={{ marginTop: "30px" }}
        >
          <Menu.Item key="13">option5</Menu.Item>
          <Menu.Item key="14">option6</Menu.Item>
          <Menu.Item key="15">option7</Menu.Item>
          <Menu.Item key="16">option8</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub5"
          icon={<BackgroundSvg height="1.7rem" width="1.7rem" />}
          title="subnav 5"
          style={{ marginTop: "30px" }}
        >
          <Menu.Item key="17">option9</Menu.Item>
          <Menu.Item key="18">option10</Menu.Item>
          <Menu.Item key="19">option11</Menu.Item>
          <Menu.Item key="20">option12</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default SiderComponent;
