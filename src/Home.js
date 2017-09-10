import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import {Switch, Route } from 'react-router';
import About from './About';
import Contact from './Contact';

const Home = () => {
    return (
      <div>
        <h1>Welcome to my homepage!</h1>
        <h2>About Me</h2>
        <p>Show some content here</p>
      </div>
    );
  }

export default Home;