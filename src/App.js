import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import route from './route';
import Footer from './Components/Footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      {route}
      <Footer/>
      </div>
    );
  }
}

export default App;
