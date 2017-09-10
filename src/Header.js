import React, { Component } from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Under Construction</h2>
                </div>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        );
    }
}
export default Header;

