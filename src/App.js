import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import store from "./store/store"
import Root from './Root'
import {BrowserRouter as Router} from 'react-router-dom';
class App extends Component {
  constructor(props){
    super(props);
  }
 
  render() {
    return <Router><Root  /></Router>
  }
}

export default App;
