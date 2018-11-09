import React from 'react';
import { Parallax } from "react-parallax";
import { Responsive, Embed, Header, Image, Divider } from 'semantic-ui-react'
import TechCards from './TechCards';
import Pdf from './Pdf'
const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};
const style = {
    innerParallax: {
        minHeight: '50vh',
    }, 
    list: {
        listStyle: 'none'
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
    fontSize: "50px"

};
const image1 = '/img/Massive_me.jpg'
const image2 = '/img/elbertTop.jpg'
const image3 =
    "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
const image4 =
    "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";
const image5 = '/img/knexBackend.png'
const ParallaxTest = () => (
    <div >
    <div style={styles}>
        <Parallax bgImage={image2} strength={500}>
        <div id='about-me' style={{ height: 500 }}>
            <Header as='h1' style={insideStyles} dividing>Kyle Czajkowski
            </Header>
        </div>
        </Parallax>
        <h1 style={style.innerParallax}>| | |</h1>
        <Parallax bgImage={image5} strength={500}>
        <div style={{ height: 500 }}>
            <Header style={insideStyles}>Dynamic Blur</Header>
        </div>
        </Parallax>
        <div id='skills' style={style.innerParallax}>
        <Divider />
            <Divider />
            <Header as='h1' dividing>Skills</Header>
            <Image.Group size='small'>
               <TechCards style='padding: 10px;'/>
            </Image.Group>
            <Divider />
            <Divider />
        </div>
        <Parallax bgImage={image2} strength={500}>
        <div style={{ height: 500 }}>
            <Header style={insideStyles}>Reverse direction</Header>
        </div>
        </Parallax>
        <h1 style={style.innerParallax}>| | |</h1>
        <Parallax
        bgImage={image4}
        strength={200}
        renderLayer={percentage => (
            <div>
            <div
                style={{
                position: "absolute",
                background: `rgba(255, 125, 0, ${percentage * 1})`,
                left: "50%",
                top: "50%",
                borderRadius: "50%",
                transform: "translate(-50%,-50%)",
                width: percentage * 500,
                height: percentage * 500
                }}
            />
            </div>
        )}
        >
        <div style={{ height: 500 }}>
            <Header style={insideStyles}>renderProp</Header>
        </div>
        </Parallax>
        <div style={{ height: 500 }} />
    </div>
    </div>
);
export default ParallaxTest

