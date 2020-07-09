import React from "react"
import { Parallax } from "react-parallax"
import {
  Card,
  Header,
  Image,
  Divider,
  Icon,
  List,
  Container
} from "semantic-ui-react"

import TechCards from "./TechCards"
import Projects from "./Projects"

const image2 = "/img/elbertTop.jpg"
const image3 = "/img/greenMountains.jpg"
const image4 = "/img/theSpot.jpg"
const image5 = "/img/knexBackend.png"
const headshot = "/img/Me.jpg"

const ParallaxTest = () => (
  <div>
    <div className="parallax-cont">
      <Parallax bgImage={image2} strength={600}>
        <div id="about-me">
          <Header id="about-header" as="h1" dividing>
            About Me
          </Header>
        </div>
      </Parallax>
      <Container className="about-me" textAlign="justified">
        <Header as="h1">Full-Stack Engineer</Header>
        <div className="profile">
          <Image size="medium" src={headshot} />
          <div className="paragraphs">
            <p>
              My passion in life has always been learning new skills and
              exploring alluring places. To me happiness is constantly engaging
              in activities that keep me in motion towards a better future. My
              choice enroll in the Web Development immersive at Galvanize is the
              next step to make a better life for my future self.
            </p>
            <p>
              Becoming a Full-Stack Developer will allow me to pursue my love of
              problem solving, experimenting, improvement of my work and myself.
              As such, I am excited to see what kind of jobs are available with
              my known and unknown development skills. During the program, I
              plan on searching for a full-stack development career in the
              greater Denver Metro area while being open to change.
            </p>
            <p>
              While I am not at school and at home, I enjoy learning the Guitar,
              playing board games, and reading. When I have more time to myself
              I love to spend time outdoors backpacking, hiking, climbing
              14er's, and skiing.
            </p>
          </div>
        </div>
      </Container>
      <Parallax bgImage={image4} strength={500}>
        <div className="skills-img">
          <Header id="skills-header">Skills</Header>
        </div>
      </Parallax>
      <div id="skills">
        <Divider />
        <Divider />
        <Header as="h1" dividing>
          Skills
        </Header>
        <Image.Group size="small" className="img-group">
          <TechCards />
        </Image.Group>
        <Divider />
        <Divider />
      </div>
      <Parallax bgImage={image5} strength={500}>
        <div className="skills-img">
          <Header id="skills-header">Projects</Header>
        </div>
      </Parallax>
      <Card.Group id="projects" centered>
        <Projects />
      </Card.Group>
      <Parallax bgImage={image3} strength={500}>
        <div id="resume" className="skills-img">
          <a href="./img/Resume_july_2020.pdf" download><Header id="skills-header">Resume <Icon fitted name="download" size="big" /></Header></a>
        </div>
      </Parallax>
      
      <Divider />
      <List id="contact" className="bottom-list" horizontal>
        <List.Item
          as="a"
          href="https://www.linkedin.com/in/kyle-czajkowski/"
          target="_blank"
        >
          <Icon
            className="contactIcon"
            color="grey"
            name="linkedin"
            size="huge"
          />
        </List.Item>
        <List.Item as="a" href="https://github.com/Kyle-Ski" target="_blank">
          <Icon
            className="contactIcon"
            color="grey"
            name="github"
            size="huge"
          />
        </List.Item>
        <List.Item as="a" href="mailto:skiroyjenkins@gmail.com">
          <Icon className="contactIcon" color="grey" name="mail" size="huge" />
        </List.Item>
        <List.Item as="a" href="tel: +1-303-374-4256">
          <Icon className="contactIcon" color="grey" name="phone" size="huge" />
        </List.Item>
      </List>
    </div>
  </div>
)
export default ParallaxTest
