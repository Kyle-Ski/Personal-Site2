import React from 'react';
import { Parallax } from "react-parallax";
import { Responsive, Segment } from 'semantic-ui-react'
import TechCards from './TechCards';
const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};
const style = {
    innerParallax: {
        minHeight: '50vh'
    }, 
    list: {
        listStyle: 'none'
    }
}
const insideStyles = {
    background: "white",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
};
const image1 = require('./img/Massive_me.jpg')
const image2 = require('./img/elbertTop.jpg')
const image3 =
    "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
const image4 =
    "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";
const image5 = require('./img/knexBackend.png')
const ParallaxTest = () => (
    <div >
    <div style={styles}>
        <Parallax bgImage={image2} strength={500}>
        <div style={{ height: 500 }}>
            <div style={insideStyles}>HTML inside the parallax
            </div>
        </div>
        </Parallax>
        <h1 style={style.innerParallax}>| | |</h1>
        <Parallax bgImage={image5} strength={500}>
        <div style={{ height: 500 }}>
            <div style={insideStyles}>Dynamic Blur</div>
        </div>
        </Parallax>
        <div className="technologies" style={style.innerParallax}>
            <ul style={style.list}>
               <TechCards />
            </ul>
        </div>
        <Parallax bgImage={image2} strength={500}>
        <div style={{ height: 500 }}>
            <div style={insideStyles}>Reverse direction</div>
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
            <div style={insideStyles}>renderProp</div>
        </div>
        </Parallax>
        <div style={{ height: 500 }} />
        <h2>{"\u2728"}</h2>
    </div>
    </div>
);
export default ParallaxTest

