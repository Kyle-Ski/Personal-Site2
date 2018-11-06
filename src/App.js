import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import Cards from './components/Cards'
import NavSideBar from './components/NavSideBar'
import { Responsive, Segment } from 'semantic-ui-react'

const style ={
  card: {
    padding: '5vw'
  }
}

class App extends Component {
  render() {
    return (
      <div>
      <Responsive as={Segment} minWidth={768}>
      <NavBar />
      </Responsive>
      <Responsive maxWidth={767}>
      <NavSideBar />
      </Responsive>
      <Responsive as={Segment} minWidth={768}>
      <div className='page-body'>
      
      <Cards style={style.card}/>
      <Cards style={style.card}/>
      <Cards style={style.card}/>
      <Cards style={style.card}/>
      <Cards style={style.card}/>
      <Cards style={style.card}/>
      <Cards style={style.card}/>
      <Cards style={style.card}/>
      <Cards style={style.card}/>
      <Cards style={style.card}/>
      <Cards style={style.card}/>
      </div>
      </Responsive>
      </div>
    );
  }
}

export default App;
