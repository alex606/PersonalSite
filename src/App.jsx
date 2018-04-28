import React from 'react';
import './styles/App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ContactForm from './ContactForm';
import Portfolio from './Portfolio';
import About from './About';

const mainStyle = {
  backgroundColor: 'lightGrey',
};
const App = () => (
  <div style={mainStyle}>
    <Header />
    <Main />
    <Portfolio />
    <ContactForm />
    <About />
    <Footer />
  </div>
);
export default App;
