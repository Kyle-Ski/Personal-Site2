import React from 'react';
import { Parallax } from "react-parallax";
import { Responsive, Card, Header, Image, Divider, Icon, List, Container } from 'semantic-ui-react'
import TechCards from './TechCards';
import Projects from './Projects';

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};
const style = {
    innerParallax: {
        minHeight: '50vh',
    }, 
    list: {
        backgroundColor: 'black',
        width: '100vw',
        height: '15vh',
        padding: '20px',
        borderTop: 'solid darkgreen 6px'
    },
    profile: {
        display: 'flex'
    }
}
const insideStyles = {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    padding: 50,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    borderRadius: "15px",
    fontSize: "50px",
};
const skillStyles = {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    padding: 50,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    borderRadius: "15px",
    fontSize: "50px",
    color: 'white'
};
const image1 = '/img/Massive_me.jpg'
const image2 = '/img/elbertTop.jpg'
const image3 = '/img/greenMountains.jpg';
const image4 = '/img/mountainPath.jpg'
const image5 = '/img/knexBackend.png'
const headshot = '/img/Profile.jpg'
const ParallaxTest = () => (
    <div >
        <div style={styles}>
            <Parallax bgImage={image2} strength={600}>
                <div id='about-me' style={{ height: '90vh' }}>
                    <Header as='h1' style={insideStyles} dividing>About Me
                    </Header>
                </div>
            </Parallax>
            <Container className='about-me' textAlign='justified'>
                <Header as='h1'>Full-Stack Engineer</Header>
                <div style={style.profile}>
                <Image size='small' src={headshot}/>
                <div className='paragraphs'>
                <p>
                    My passion in life has always been learning new skills and exploring alluring places. 
                    To me happiness is constantly engaging in activities that keep me in motion towards a 
                    better future. My choice enroll in the Web Development immersive at Galvanize is the 
                    next step to make a better life for my future self.
                </p> 
                <p>
                    Becoming a Full-Stack Developer will allow me to pursue my love of problem solving, 
                    experimenting, improvement of my work and myself. As such, I am excited to see what kind 
                    of jobs are available with my known and unknown development skills. During the program, I 
                    plan on searching for a full-stack development career in the greater Denver Metro area while 
                    being open to change. 
                </p>
                <p>
                    While I am not at school and at home, I enjoy learning the Guitar, playing board 
                    games, and reading. When I have more time to myself I love to spend time outdoors 
                    backpacking, hiking, climbing 14er's, and skiing.
                </p>
                </div>
                </div>
            </Container>
            <Parallax bgImage={image4} strength={500}>
                <div style={{ height: 500 }}>
                    <Header style={insideStyles}>Skills</Header>
                </div>
            </Parallax>
            <div id='skills' style={style.innerParallax}>
                <Divider />
                <Divider />
                <Header as='h1' dividing>Skills</Header>
                <Image.Group size='small'>
                    <TechCards />
                </Image.Group>
                <Divider />
                <Divider />
            </div>
            <Parallax bgImage={image5} strength={500}>
                <div style={{ height: 500 }}>
                    <Header style={skillStyles}>Projects</Header>
                </div>
            </Parallax>
            <Card.Group id='projects' centered>
                <Projects />
            </Card.Group>
            <Parallax bgImage={image3} strength={500}>
                <div style={{ height: 500 }}>
                    <Header style={insideStyles}>Resume</Header>
                </div>
            </Parallax>
            <Divider />
            <Responsive minWidth={768}>
                <iframe title='desktop' id='resume' src="https://docs.google.com/viewer?url=https://raw.githubusercontent.com/Kyle-Ski/Personal-Site2/b73cee08b92de65e80aac3114010a418efc1b5c7/public/img/LeafBuyer%20Resume.pdf&embedded=true" height="700px" width="75%"></iframe>
            </Responsive>
            <Responsive maxWidth={767}>
                <iframe title='smaller' id='resume' src="https://docs.google.com/viewer?url=https://raw.githubusercontent.com/Kyle-Ski/Personal-Site2/b73cee08b92de65e80aac3114010a418efc1b5c7/public/img/LeafBuyer%20Resume.pdf&embedded=true" height="500px" width="100%"></iframe>
            </Responsive>
            <Divider />
            <List style={style.list} horizontal>
                <List.Item as='a' href='https://www.linkedin.com/in/kyle-czajkowski/'><Icon className='contactIcon' color='grey' name='linkedin' size='huge'/></List.Item>
                <List.Item as='a' href='https://github.com/Kyle-Ski'><Icon className='contactIcon' color='grey' name='github' size='huge' /></List.Item>
                <List.Item as='a' href='mailto:skiroyjenkins@gmail.com'><Icon className='contactIcon' color='grey' name='mail' size='huge' /></List.Item>
                <List.Item as='a' href='tel: +1-303-374-4256'><Icon className='contactIcon' color='grey' name='phone' size='huge' /></List.Item>
            </List>
        </div>
    </div>
);
export default ParallaxTest

