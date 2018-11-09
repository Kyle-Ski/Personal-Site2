import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import Cards from './components/Cards'
import NavSideBar from './components/NavSideBar'
import { Responsive, Segment } from 'semantic-ui-react'
import ParallaxTest from './components/ParallaxTest'

const style ={
  card: {
    padding: '5vw'
  }
}

class SecondApp extends Component {
  render() {
    return (
      <div>
      <iframe src="https://docs.google.com/viewer?url=https://raw.githubusercontent.com/Kyle-Ski/Personal-Site2/b73cee08b92de65e80aac3114010a418efc1b5c7/public/img/LeafBuyer%20Resume.pdf&embedded=true" height="600px" width="100%"></iframe>
      <Responsive minWidth={768}>
      <NavBar />
      <ParallaxTest />
      </Responsive>
      <Responsive maxWidth={767}>
      <NavSideBar />
      </Responsive>
      </div>
    );
  }
}

export default SecondApp;
