import React from "react";
import { Typography, Divider } from "antd";

const { Title, Paragraph, Text } = Typography;

class Projects extends React.Component {
  state = {
    windowWidth: "900",
  };
  ref = React.createRef();

  componentDidMount() {
    this.setState({
      windowWidth: this.ref.current.clientWidth,
    });
  }

  render() {
    return (
      <Typography
        ref={this.ref}
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
        <Title level={3}>
          Porfolio Website – Python/Django, Javascript/React
        </Title>
        <Paragraph>
          This website’s role is to express me as a programmer. It came into
          being in raw, basic form, but going to evolve into something more
          complex and sophisticated. If time will let me do this. Currently it
          holds only three sections :
        </Paragraph>
        <Paragraph>
          <Text strong>About me</Text> – my CV to download and also described in
          details for those who would be interested in knowing me better.
        </Paragraph>
        <Paragraph>
          <Text strong>Projects</Text> – this section will hold description and
          presentation of all projects I was involved into. Proffesionally and
          non-professionally. Those of which can be presented on the web I will
          publish in seperate sections on website. For example web-based
          material editor is working right now but to publish it in here, first
          i would have to integrate with React. Editor is using google’s dat.gui
          library and im my opition it would look silly to use it with React. As
          soon as I make UI with React for this app I will put it here on this
          website. The same goes for all projects capable of working in browser.
          For those of which are not capable of working in browser, like for
          example Unreal Engine projects, I will provide executables to download
          and launch on local machine.
        </Paragraph>
        <Paragraph>
          <Text strong>Blog</Text> – this is my personal blog. For now it is in
          basic form and do not allow anything but reading it. In time i’m
          planning to enrich it with comments for registered users, twitter and
          facebook integration (might be, not sure) and anything that will come
          into my imagination and look reasonable.
        </Paragraph>
        <Paragraph>
          <Text strong>Material Editor</Text> – Early version of material
          editor. I was able to plug it into the website thanks to Django.
          Because of rather big library of maps and cubic textures, initial
          loading time may be unacceptable for less patient users. After being
          stored in browser cache, subsequent loadings are several times faster.
        </Paragraph>
        <Paragraph>
          For now this website is using following technologies:
          <ul>
            <li>
              <Text strong>Django / Python</Text> - as backend
            </li>
            <li>
              <Text strong>React / Javascript</Text> - as frontend
            </li>
            <li>
              <Text strong>Ant design</Text> - react component library
            </li>
          </ul>
          In the next step i will integrate material editor and video chat so it
          will contain:
          <ul>
            <li>
              <Text strong>three.js</Text> - material editor
            </li>
            <li>
              <Text strong>webRTC</Text> - videochat and chat
            </li>
            <li>
              <Text strong>x3dom</Text> - 3D objects created by me, embedded
              into DOM of this website. Might need new section.
            </li>
          </ul>
        </Paragraph>
        <Divider />

        <Title level={3}>
          Material editor – three.js/WebGL and Javascript/Typescript/React
        </Title>
        <Paragraph>
          This project started as a quick, testing app which i was using while
          implementing material and multi-material for{" "}
          <a href="http://www.selfcad.com">Selfcad</a>. I had to improve
          development process by reducing reloading time. Waiting for 1 minute
          every time i change some part of code may be really annoying. After
          some time I’ve rewriten its code, expanded and used it in my bachelor
          thesis which was about material and light in computer graphics.
          Application was still limited to use only set of predefined shapes and
          materials and two lighting models – phong and pbr. Then I realized
          that this is a boilerplate which can be extended in many ways. Even
          though some of them would not be consistent with each other.
        </Paragraph>
        <Paragraph>
          Technologies used to make this app in its initial version:
          <ul>
            <li>
              <Text strong>Javascript</Text>
            </li>
            <li>
              <Text strong>three.js</Text>
            </li>
            <li>
              <Text strong>dat.gui</Text>
            </li>
          </ul>
        </Paragraph>
        <Paragraph>
          <img
            style={{ display: "block", margin: "auto" }}
            id="me_ui"
            src={process.env.PUBLIC_URL + "/static/media/me_ui.png"}
            alt="Material Editor UI"
            width="100%"
          ></img>
          <br />
          This how this "boilerplate" looks like. As we can see UI is divided
          into sections. Every section consists of properties which are applied
          to objects in the scene. Objects uses different lighting models to
          allow comparsion between them.
          <ul>
            <li>
              <Text strong>Lights</Text>
            </li>
            <li>
              <Text strong>Objects (Shapes)</Text>
            </li>
            <li>
              <Text strong>Material</Text>
            </li>
            <li>
              <Text strong>Textures</Text>
            </li>
            <li>
              <Text strong>Camera</Text>
            </li>
          </ul>
        </Paragraph>
        <Paragraph>
          New version of editor will be built upon React and will have separate
          section here. It will take some time because even though i have
          working template that needs only to plug functionality, it still need
          to be integrated with website. This may force me to rewrite either
          this website's logic and/or routing or editor's.
          <br />
          <br />
          <img
            style={{ display: "block", margin: "auto" }}
            id="me_ui"
            src={process.env.PUBLIC_URL + "/static/media/me_react.png"}
            alt="Material Editor UI React"
            width="100%"
          ></img>
        </Paragraph>
        <Divider />

        <Title level={3}>Browser-based Video Chat app Javascript/WebRTC</Title>
        <Paragraph>
          This application was written because i wanted to test data transfer
          capabilities of webRTC technology. Simple yet useful. I want to give
          it a section on this website.
        </Paragraph>
        <Divider />

        <Title level={3}>
          Multiplayer TPP RPG Shooter – Unreal Engine 4 / C++
        </Title>
        <Paragraph>
          <video
            width="100%"
            controls
            style={{ display: "block", margin: "auto" }}
          >
            <source
              src={process.env.PUBLIC_URL + "/static/media/UE4_RPG_Shooter.mp4"}
              type="video/mp4"
            ></source>
            Your browser does not support HTML video.
          </video>
        </Paragraph>
        <Divider />

        <Title level={3}>Space Shoter VR game – C#/Unity</Title>
        <Paragraph>
          <video
            width="100%"
            controls
            style={{ display: "block", margin: "auto" }}
          >
            <source
              src={
                process.env.PUBLIC_URL +
                "/static/media/Unity_VRSpaceShooter.mp4"
              }
              type="video/mp4"
            ></source>
            Your browser does not support HTML video.
          </video>
        </Paragraph>
        <Divider />

        <Title level={3}>Pirate Ship Simulation - C++/Qt</Title>
        <Paragraph>
          I'm amazed by Qt framework. I've always wanted to work with it, but
          unfortunatelly had no chance, yet. Pirate Ship simulator was my first
          experiment with this technology. Nothing fancy or useful, but i've
          learned a lot about framework itself.
          <img
            style={{ display: "block", margin: "auto" }}
            width="80%"
            id="me_ui"
            src={process.env.PUBLIC_URL + "/static/media/pirates_gui.png"}
            alt="Pirates Ship Simulation GUI"
          ></img>
          <br />
          GUI of the program lets user set following simulation parameters.
          <ul>
            <li>
              <Text strong>Duration in seconds</Text>
            </li>
            <li>
              <Text strong>Area in pixels, which pirate ship will patrol </Text>
            </li>
            <li>
              <Text strong>
                List of cargo ships of 3 types, with time of spawning
              </Text>
            </li>
          </ul>
          <br />
          <img
            style={{ display: "block", margin: "auto" }}
            width="100%"
            id="me_ui"
            src={process.env.PUBLIC_URL + "/static/media/pirates_sea.png"}
            alt="Pirates Ship Simulation Sea"
          ></img>
          <br />
          As we can see, pirate ship patrol given area and try to pursue the
          cargo ship when overlaps it at some determined distance. At the same
          time, cargo ship reacts to this pursuit. It start to escape when
          pirate ship overlaps determined area around the ship. Every cargo ship
          has unique detection area and move with different speed. As it was
          experiment it is not intended to be developed further.
        </Paragraph>
        <Divider />

        <Title level={3}>
          Train_O_Matic. Ticket Reservation System – C++/Qt
        </Title>
        <Paragraph>
          Because i was so impressed with Qt framework , i started another
          experiment. This one was more mature and have a chance to be something
          more that just experiment. Application designed for kiosk with touch
          screen to place on train station for passengers to use. Passenger may
          use it to check train routes, make reservation, buy ticket and print
          it.
          <br />
          <br />
          <img
            style={{ display: "block", margin: "auto" }}
            width="100%"
            id="me_ui"
            src={process.env.PUBLIC_URL + "/static/media/trainomatic.png"}
            alt="Train-o-matic"
          ></img>
          <br />
          Main sections in aplication.
          <ul>
            <li>
              <Text strong>Home</Text> - general information board
            </li>
            <li>
              <Text strong>Rozkład</Text> - train routes passing through train
              station kiosk is placed at
            </li>
            <li>
              <Text strong>Trasa</Text> - Passenger may plan his/her travel by
              choosing destination and waypoints. Route seleced this way is
              passed to Ticket section as input
            </li>
            <li>
              <Text strong>Bilet</Text> - ticket section. Passenger can make
              reservation, buy and then print ticket
            </li>
            <li>
              <Text strong>Cofnij</Text> - undo changes. Needs history of
              changes.
            </li>
          </ul>
          Application is supposed to be using some kind of API to get train
          routes and local information. Should also work with printer drivers or
          send printing jobs through the network. It is not finished yet though.
          Life.
        </Paragraph>
        <Divider />

        <Title level={3}>Tic Tac Toe game with AI – C</Title>
        <Paragraph>
          C is excellent language. Demanding but extremely flexible. It is a
          language which gives you almost full control on how your program works
          but at the price of imposing many responsibilities on programmer. It
          has its flaws, and many new languages like Go or Rust are posing as
          substitution for C, but it is not going to be substituted by them
          anytime soon. This project was an excersise in C . It works in
          terminal, have scalable board so theoretically one can play GO with
          computer. Unfortunatelly, because it is using recursive min/max
          algorithm, the bigger the board is, then more computationally
          expensive.
        </Paragraph>
        <Divider />

        <Title level={3}>
          RC Car controlled with Mobile Android App via bluetooth –
          ATmega328p/C/Arduino library
        </Title>
        <Paragraph>
          RC car is controlled with android app installed on mobile phone via
          bluetooth 2.0. Car has one DC drive on rear axle and servo motor with
          steering column on front. User can gradually increase DC drive speed
          forward and backward. Servo allows to change position of front wheels
          gradually in regulated angle.
          <br />
          <br />
          <img
            style={{ display: "block", margin: "auto" }}
            width="100%"
            id="me_ui"
            src={process.env.PUBLIC_URL + "/static/media/schemat.jpg"}
            alt="RCCar scheme"
          ></img>
        </Paragraph>
        <Paragraph>
          Parts used:
          <ul>
            <li>Current linear regulator MAX603 – 5V for microcontroller</li>
            <li>Microcontroler ATMega 328P</li>
            <li>7.2v battery</li>
            <li>L298N bridge</li>
            <li>servo MG946R</li>
            <li>bluetooth module HC06/XM15</li>
            <li>C1 10μF – filter for 5v current</li>
            <li>C2 100μF – filter for 7.2v current</li>
            <li>C3/C4 22pF – filter for crystal oscillator current</li>
            <li>Q1 16MHz – crystal oscillator for microcontroller to work</li>
          </ul>
          <img
            style={{ display: "block", margin: "auto" }}
            width="100%"
            id="me_ui"
            src={process.env.PUBLIC_URL + "/static/media/board.jpg"}
            alt="RCCar scheme"
          ></img>
        </Paragraph>

        <Paragraph>
          To steer my car i use application found on Google Play Store. It was
          free and fully functional. I decided to not reinvent the wheel and use
          it. It has no API of any kind and no documentation. After some
          googling i found Github repository. Went through code and figure out
          the signals it sends.
          <br />
          <br />
          <img
            style={{ display: "block", margin: "auto" }}
            width="100%"
            id="me_ui"
            src={process.env.PUBLIC_URL + "/static/media/app.jpg"}
            alt="RCCar scheme"
          ></img>
          <br />
          <ul>
            <li>FB (Forward/Backward) – speed value</li>
            <li>LR(Left/Right) – value for servo-mechanism</li>
            <li>
              There is option to use accelerometer for steering, setting values
              for maximum angles for servo and DC Motor
            </li>
          </ul>
          There were several problems during development process.
        </Paragraph>
        <Paragraph>
          - Microcontroler was adopted to work with Arduino libraries and
          programmed with USBAsp device (pins 1,17,18,19). To write program i
          was using functions of Arduino IDE. Communication tested with 9600
          baud and 115200 baud. At 9600 servo was stuttering so i switched to
          115200 - Turned out that PCB circuts are to thin to support current
          needed by DC motor. Solved problem by making 7.2V circut bypassing
          PCB.
        </Paragraph>
        <Paragraph>
          - Initially there car was suposed to use HC06 bluetooth module for
          communication. My bad because i missed information on docs that module
          has tolerance for 5v on signal but works on 3.3V. I had to switch to
          something else hence module XM-15B is used instead. XM-15B module has
          longer (30m) range than HC06 (10m) anyways.
        </Paragraph>
        <Paragraph>
          - Problem with serial communication between module and
          microcontroller. When paired they couldnt talk to each other.
          According to specification device had to have default communication
          parameters set to 9600 baud, stop bit set to 1 and parity bit set to
          0. After many experiments turned out that it has different settings
          than in documentation. It has 9600 baud, stop bit set to 1 and parity
          bit set to 0. After correcting those values bluetooth module and
          microcontroller started to talk to each other.
        </Paragraph>
        <Paragraph>
          - Last problem was battery. I didnt expect that fully charged battery
          had 8.7v which was deadly for MG946R servo. I had to put Pololu S7V8A
          step-up/step-down voltage regulator inbetween battery and 7.2V circut.
          Unfortunatelly servo MG946R was not available at that time so i
          changed it to MG996R with almost identical parameters. After solving
          those problem i got all of it working and talking to each other. Car
          is still need some mechanical improvements so i can settle
          servomechanism in front to work with steering column.
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
      </Typography>
    );
  }
}

export default Projects;
