import React from "react";
import { Typography, Divider, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

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
        <Title>Hello there!</Title>
        <Paragraph>
          My name is Tom Mazurek. I’m programmer. At least, this is what I do
          for the living. If you are interested in content more substantial for
          programming, i would recommend you to go to{" "}
          <Text strong>Projects</Text> section. If you are interested in my
          story, read what's below. I tried to be brief and at the same time, to
          mention all important details, that made my who I am and placed me
          where I am now. I know that in IT things are changing really fast and
          knowledge devaluate every few years. My point in telling this story is
          to show how deep my passion for programming goes and how hungry of new
          challanges i am.
        </Paragraph>
        <Button
          type="primary"
          download
          href="/static/media/CV_Tomasz_Mazurek.pdf"
          icon={<DownloadOutlined />}
          size="large"
          style={{ margin: "auto", color: "white" }}
        >
          Download Resume
        </Button>
        <Divider />
        <Paragraph>
          <Title> 8 bit</Title>
          First computer i’ve ever seen was my uncle’s ZX 81 Specrum. This
          encounter changed me forever. I still remember my parents whining
          about me, spending hours experimenting with it, every time we paid him
          a visit. It was early 80’s. I spent my all my pocket money on computer
          magazines. For months i tortured my parents to get me microcomputer.
          In 1985, on my 10th birthday, I got my first machine. It was 8 bit
          Atari 65XE. There were 3 ways in which user could input program into
          this machine. First, fastest, most reliable and most trivial way was,
          to put plastic cardridge with program data, into a special "hole" in
          computer’s plastic case. Program was loaded almost instantly. Second
          method, less trivial, not so fast and surely not so reliable was to
          load program from compact cassette tapes. Such cassette was holding
          magnetic tape enclosed in plastic case. Program has been written in
          form of digital signal encoded on two sides of the tape. It was really
          tricky to load it, though. Tape was long and very fragile. Loading
          could take up to 45 min per side and could be easily disturbed, for
          many reasons. Deformed tape, DAC head faulty setup, even loud noise
          could make loading to fail at some point. Last, most time consuming,
          least reliable and most complicated was to enter program by hand. With
          keyboard. This was what i prefered. Computer magazines at that time
          were filled with listing of programs. It could be anyting: Pascal,
          Basic, C, assembly and even machine code. Not only for Atari but for
          every 8 bit machine on the market. I learned a lot from typing and
          debugging code entered this way. Every successful launch was like
          getting onto the top of the mountain but costed hours of debugging.
          Strange hobby for 10-year-old boy, i know. After some time I decided
          to write my own programs. First language I was using was Atari Logo.
          The point of the matter was to move virtual turtle on the screen with
          code. It was like programming robots. After some experimenting i got
          bored and switched to Atari Basic. It was procedural language, quite
          easy to grasp. Problem with this language laid in conditional jumps.
          It was similar to assembly language subroutines, except it took line
          number instead of name to invoke. Because of this, programs written in
          Basic had tendency to transform into spagetti real quick. It was
          nearly impossible to write bigger programs with such language. After
          some time I moved to Pascal. It was my first mature language. I spent
          many hours trying to learn it but because small number of listings
          published in magazines it was really hard to figure out. Books i
          couldn't afford and there was no www at that time. At the same time I
          tried to get a grasp on C but it was affected by the same problems as
          Pascal.
          <Title>16 bit</Title>
          After few years, as a seasoned 8bit-user I got my first 16bit
          experience. It was a game Space Ace on Amiga. Impression was
          jaw-dropping. I started to torture my parents right away. After year
          or so i got Amiga 500. It was absolutely stunnig piece of hardware
          capable of things I couldn’t even imagine as a Atari user, yet my
          experience with it was different. Even though typing code from
          listings and experimenting with my own code was educative, I turned to
          something else. It was Soundtracker and was like writing music with
          machine code. Soon I got my first sampler and started to create music
          using my own samples. Several months after i joined non formal group
          of people which called themselves Amiga Demo Scene. It was a group of
          Amiga microcomputer enthusiasts which was trying to push the boundried
          of what’s possible on this machne by making multimedia programs named
          “demos”. My first group was “Katharsis”. We were 5 people and everyone
          of us in group had some role. There was coder, graphics artist, music
          artist and swapper who’s role was to distribute our demos. Apart form
          making music, I was experimenting with Amiga assemby language and 3D
          graphics. I was 14 and I found my place in life. I was happy.
          <Title>Disaster</Title>I grew up in small town in Silesian District
          which is industrial heart of Poland. We’ve got 7 coal mines, dirty air
          and moon landscape. My father was fixing cars and running small
          bussiness. At the late 80’s he left Poland and moved to New York where
          he was working for 2 years to earn money to move his bussines to new
          location. I was almost 15 at that time, graduating from elementary
          school. I knew that I want to be a programmer and work with computers.
          My plan was to get into secondary vocational school with profile in
          informatics. Next move would be to enroll in the University of
          Technology where I could learn computer science. Unfortunatelly, my
          father had other plans for me and my future. He wanted me to get
          involved in bussines he was running, help him build new building for
          this bussiness and take it over after he will retire. My mother
          supporting me, but after being blackmailed by my father, she gave up.
          It was huge blow for me but I had no other choice than yield to my
          father's will. He sent me to basic vocational school with car repair
          specialization which i hated. For two more years I was trying to be
          active on Amiga Demo Scene but it was becoming more difficult every
          month. I was attending school for 2-3 days a week and work for the
          rest of the week. I was working with my father in his garage for
          8h-10h per day. On my school break i had to work full-time. Including
          Saturdays. At the age of 15. For free. Moreover, my father figured out
          that my passion for computers is harmful for productivity and decided
          to destroy it. He was filling my spare time with various tasks at home
          or garden. When i asked him why he was doing it to me, he was
          explaining: “Computers has no future, son. You must think
          realistically”. Oh sweet irony. He couldn't be further from the truth.
          I could only use my Amiga late at night and on holidays. Because of
          that i couldn't deliver on time tasks i was assigned to. My ties with
          friends from Amiga Demo Scene and my group were growing thin. After 2
          years or so, i lost contact with my friends and have been cut off from
          all their projects. I felt like I was slowly slippling into
          depression. But i was still dreaming that someday i will be
          professional programmer.
          <Title>Struggle</Title>
          I’ve finished basic vocational school and decided to go to vocational
          secondary school. I wanted to keep up to my original plan even thought
          it has been modified by my father. I wanted to get into college to
          study Computer Science, even if it would take longer than i expected.
          My father was not happy. After several fights, blackmails and other
          usual stuff, he yielded. Not entirely thought. He forced me to choose
          shool of specific with automotive profile. I decided to bite the
          bullet. I had no computer because i had no money. I had no money
          because i wasn't paid for my work. My only option to get into
          programming was to learn it in college. And it was still possible. My
          weekday was starting at 6:00 am. After work, at 2 pm I was driving to
          school, located 25 km away from where I lived. I was sitting in school
          until about 8 pm. From 9 pm to midnight i was doing my assignments. It
          took me 3 years to finish this school. I considered it my my success
          but circumstances were far from what I’ve expected. It was 1996,
          dot-com bubble was growing really fast and demand for programmers was
          huge. And i still didn't have my own computer. I’ve done some
          research. Public colleges with computer science profile were
          overcrowded. Competition was such that all i have achieved wasn’t even
          remotely close to what was required. And 15 students was competing for
          one place. Turned out that all of my effort was for nothing. I was
          crushed and overwhelmed by this failure. I have failed to pass final
          exams, since it wasn’t make any sense to me. Another blow. I slept
          into depression even further. After few months, once again I decided
          to suck it up. I passed exams and graduated from secondary vocational
          school. My ambition shrinked and all I wanted was to escape from my
          father. I gathered myself up and started my way out. After months of
          fighting my father, he finaly gave up and agreed to pay for private
          college anywhere. I just wanted to be as far away from him as it was
          possible.
          <Title>Fall</Title>
          For many reasons, including personal ones I’ve chosen Journalism at
          Polonia University in Częstochowa. Writing is something I’m really
          comfortable with and I saw it as a job i could cope with. I’ve passed
          tests and started new chapter in my life. At least I was thinking so.
          I moved to Częstochowa. Far away from problems of my past life i felt
          revived. My depression seemed to be dissapearing. I got myself Pentium
          PC. I’m discovering internet. IRC is my main mean of communication. I
          thrived this place. I was still leaning toward computers but being
          journalist appeared to be fulfilling role i was ready to get into.
          Unfortunatelly this was new subject at university and number of
          students was not sufficient to open it up. It is hard to explain but
          instead of studying journalism i was studying economy even though
          officially i wasn not. Every semester i’ve been told that journalism
          as a subject will be available next semester. It has to gather enough
          students to be cost-effective. I started slipping back into depression
          at higher speed than ever before. At 4th semester my parents got
          divorced, funds dried up and i’ve got into depression so far I had to
          get back home to start some treatment because i was falling into
          pieces.I got back to work with my father. For free. After few years i
          met someone who decided to glue all pieces of me together. We got
          married. I spend my spare time was still experimentin with computers.
          My passion became compulsive. I created network at my workplace using
          several PCs. I my evenings at work online, learning everything related
          to computers. In 2007 my father retired. I took over his bussiness. My
          family started to grow. I started to accept my situation.
        </Paragraph>
        <Paragraph>
          <Title strong>Another attempt</Title>
          Year 2016. I was really good in hiding my passion from myself but not
          from my wife. She said she was tired looking at me spending all spare
          time with computers. Told me to give another try with college. Our 3
          kids was attending elementary school so life was becoming more stable.
          I closed my inherited, family bussiness and enrolled in the University
          of Technology to study computer science. After 20 years I attending
          school i was dreaming of. That was really weird experience. I found my
          first IT job in local firm which was servicing IT infrastructure in
          local coal mines. It was simple IT suport job. I got plenty of free
          time to learn. Thanks to this job I was able to make up for the lost
          time. At the end of first semester, unexpectedly turned out my family
          will get bigger again. Things got really complicated but with suport
          of my wife I was able to pass first two terms. After a year i’ve moved
          to programming department where for next 3 months I was working with
          X++ language. After being promoted three times without any rise and
          with my contract hasn’t being renewed, i started to look for another
          job. Fortunatelly, friend I was working with has information about
          graphics programmer position. I applied for this job and got in. This
          is how I started my work for selfcad.com. I knew things or two about
          3d graphics programming and javascript but three.js was something I
          had to learn from scratch. It took me few weeks but I eventually
          catched up with this technology. After 6 months I was doing mid/senior
          work. I got my balchelor degree in February 2020 after 3.5 years, with
          average 4.5, exemption from most of the exams (including technical
          english C1) and over two years of professional experience. It's my
          late debut. Now im ready for more :)
        </Paragraph>
      </Typography>
    );
  }
}

export default AboutMe;
