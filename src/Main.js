import React from 'react';
import './App.css';
import {Switch, Route } from 'react-router';
import About from './About';
import Contact from './Contact';
import Home from './Home';

const Main = () => {
    return (
      <div>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/About' component={About}/>
            <Route path='/Contact' component={Contact}/>
        </Switch>
      </div>
    );
  }

export default Main;