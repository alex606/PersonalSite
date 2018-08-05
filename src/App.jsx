import React from 'react';
import './styles/App.css';
import Header from './Header';
import Home from './Home';
import ContactForm from './ContactForm';
import Portfolio from './Portfolio';
import About from './About';

const App = () => (
  <div >
    <Header />
    <Home />
    <Portfolio />
    <ContactForm />
    <About />
  </div>
);
export default App;
