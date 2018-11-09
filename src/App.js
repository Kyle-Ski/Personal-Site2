import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import Cards from './components/Projects'
import NavSideBar from './components/NavSideBar'
import { Responsive, Segment } from 'semantic-ui-react'
import ParallaxContent from './components/ParallaxContent'

const style ={
  card: {
    padding: '5vw'
  }
}

class SecondApp extends Component {
  render() {
    return (
      <div>
      <Responsive minWidth={768}>
      <NavBar />
      <ParallaxContent />
      </Responsive>
      <Responsive maxWidth={767}>
      <NavSideBar />
      </Responsive>
      </div>
    );
  }
}

export default SecondApp;
