import React from "react";
import { Typography, Divider } from "antd";

const { Title, Paragraph, Text } = Typography;

class AboutMe extends React.Component {
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
        <Title>Hello</Title>
        <Paragraph>
          My name is Tomasz. And this is my website. There are many websites on
          the internet but this one is special because it's mine. If someone
          would ask: <Text underline>"Who are you?"</Text>, my answer would be
          twofold. If you define person by achievements, i would recommend you
          to go to section <Text strong>Projects</Text>. If you are interested
          in broader description - read what's below.
        </Paragraph>
        <Divider />
        <Paragraph>
          Once upon the time, i've attended to some meeting where i've been
          introduced to some programmer who worked for Facebook. "I work for
          Facebook" he said, "Who are you?". In most cases, if someone would ask
          me who i am, i couldn't reply right away because for me, it's
          existential question. "Who am i?" means "What defines me?". Am i
          defined by my look? They way i speak? The way i dress? By what i
          think? All of these questions fulfill the role of description, but
          only partially, because what they describe change in time. Every one
          of them. When i was 10 year i got Atari 65 xt. This was 8bit
          microcomputer. There were 3 ways in which user could input program
          into this machine. Fist, fastest, most reliable and most trivial was
          was to use cardridge with program data. There was a special "hole" in
          the plastic case where user could plug such element. Second method,
          less trivial, not so fast and surely not much reliable, was compact
          cassette tapes. They were holding programs in form of digital signal
          encoded on magnetic tape.
        </Paragraph>
      </Typography>
    );
  }
}

export default AboutMe;
