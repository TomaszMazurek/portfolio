import React from "react";
import { Typography, Divider } from "antd";

const { Title, Paragraph, Text } = Typography;

class Projects extends React.Component {
  state = {};
  render() {
    return (
      <Typography
        style={{
          color: "rgb(220,220,220,0.65)",
          textAlign: "left",
          paddingTop: "17px",
          wordSpacing: "5px",
          textShadow: "2px 2px 5px dark-blue",
          fontFamily: "Tahoma, Geneva, sans-serif",
          fontWeight: "lighter",
          fontSize: "17px",
        }}
      >
        <Title level={1} underline>
          Projects
        </Title>
        <Title level={3}>
          Porfolio Website – Python/Django and Javascript/React
        </Title>
        <Paragraph>
          In the process of internal desktop applications development, many
          different design specs and implementations would be involved, which
          might cause designers and developers difficulties and duplication and
          reduce the efficiency of development.
        </Paragraph>
        <Divider />

        <Title level={3}>
          Material editor – three.js/WebGL and Javascript/Typescript/React
        </Title>
        <Paragraph>
          In the process of internal desktop applications development, many
          different design specs and implementations would be involved, which
          might cause designers and developers difficulties and duplication and
          reduce the efficiency of development.
        </Paragraph>
        <Divider />

        <Title level={3}>Browser-based Video Chat app Javascript/WebRTC</Title>
        <Paragraph>
          In the process of internal desktop applications development, many
          different design specs and implementations would be involved, which
          might cause designers and developers difficulties and duplication and
          reduce the efficiency of development.
        </Paragraph>
        <Divider />

        <Title level={3}>Multi-platform Game Engine – C++/OpenGL</Title>
        <Paragraph>
          In the process of internal desktop applications development, many
          different design specs and implementations would be involved, which
          might cause designers and developers difficulties and duplication and
          reduce the efficiency of development.
        </Paragraph>
        <Divider />

        <Title level={3}>Pirate Ship Simulation - C++/Qt</Title>
        <Paragraph>
          In the process of internal desktop applications development, many
          different design specs and implementations would be involved, which
          might cause designers and developers difficulties and duplication and
          reduce the efficiency of development.
        </Paragraph>
        <Divider />

        <Title level={3}>
          Train_O_Matic. Ticket Reservation System – C++/Qt
        </Title>
        <Paragraph>
          In the process of internal desktop applications development, many
          different design specs and implementations would be involved, which
          might cause designers and developers difficulties and duplication and
          reduce the efficiency of development.
        </Paragraph>
        <Divider />

        <Title level={3}>
          Tic Tac Toe game using recursive min/max algorithms – C
        </Title>
        <Paragraph>
          In the process of internal desktop applications development, many
          different design specs and implementations would be involved, which
          might cause designers and developers difficulties and duplication and
          reduce the efficiency of development.
        </Paragraph>
        <Divider />

        <Title level={3}>Space Shoter VR game – C#/Unity</Title>
        <Paragraph>
          In the process of internal desktop applications development, many
          different design specs and implementations would be involved, which
          might cause designers and developers difficulties and duplication and
          reduce the efficiency of development.
        </Paragraph>
        <Divider />

        <Title level={3}>
          RC Car controlled with Mobile Android App via bluetooth –
          ATmega328p/C/Arduino library
        </Title>
        <Paragraph>
          In the process of internal desktop applications development, many
          different design specs and implementations would be involved, which
          might cause designers and developers difficulties and duplication and
          reduce the efficiency of development.
        </Paragraph>
        <Divider />

        <Title level={3}>Restaurant Management Application - C++/WPF</Title>
        <Paragraph>
          In the process of internal desktop applications development, many
          different design specs and implementations would be involved, which
          might cause designers and developers difficulties and duplication and
          reduce the efficiency of development.
        </Paragraph>
        <Divider />

        <Title level={3}>Web BookStore - Python/Django </Title>
        <Paragraph>
          After massive project practice and summaries, Ant Design, a design
          language for background applications, is refined by Ant UED Team,
          which aims to
        </Paragraph>
        <Divider />
      </Typography>
    );
  }
}

export default Projects;
