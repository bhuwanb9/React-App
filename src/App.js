import React from 'react';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
//import logo from './logo.svg';
import './App.css';
import Radium, {StyleRoot} from 'radium';
import Header from './Header/Header';
import Footer from './Footer/Footer';

import CommonRoute from './Routing/CommonRoute';

function App() {
  return (
    <StyleRoot>
    <div className="App">
        <Header></Header>
        {CommonRoute}
        <Footer></Footer>
    </div>
    </StyleRoot>
  );
}

export default App;
