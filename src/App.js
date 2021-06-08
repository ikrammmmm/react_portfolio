import React, { Component } from 'react';
import { HashRouter as  Router, Route, Switch } from 'react-router-dom';

import {Home} from './components/pages/home';

import {Footer} from './components/templates/footer';
import {Header} from './components/templates/header';

import {PortFolio} from './components/pages/portfolio';
import {About} from './components/pages/about';
import {ContactUs} from './components/pages/contactUs';


function App(){
  return (
    <Router>
    <div className="App">
      <Header/>
      <Switch>
      <Route path="./" exact component={Home}/>
      <Route path="./home" component={Home}/>
      <Route path="./about" component={About}/>
      <Route path="./contact" component={ContactUs}/>
      <Route path="./portfolio" component={PortFolio}/>
      </Switch>
      <Footer/>
    </div>
    </Router>
   )
}

export default App;
