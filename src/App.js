import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import Cards from './components/Cards'

const style ={
  card: {
    padding: '5vw'
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
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
      </div>
    );
  }
}

export default App;
