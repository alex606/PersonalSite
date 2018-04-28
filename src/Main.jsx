import { Switch, Route } from 'react-router';

import React from 'react';
import './styles/App.css';
import Home from './Home';


const Main = () => (
  <div>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </div>
);
export default Main;
