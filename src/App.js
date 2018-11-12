import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import NavSideBar from './components/NavSideBar'
import { Responsive } from 'semantic-ui-react'
import ParallaxContent from './components/ParallaxContent'


class SecondApp extends Component {
  render() {
    return (
      <div className='main'>
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
