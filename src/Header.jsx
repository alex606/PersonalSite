import { Link } from 'react-router-dom';

import React from 'react';
import logo from './assets/logo.svg';

const hideThis = {
  display: 'none',
};
const Header = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </div>
    <ul>
      <li style={hideThis}><Link to="/">Home</Link></li>
    </ul>
  </div>
);
export default Header;

