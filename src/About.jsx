import React from 'react';
import componentStyles from './styles/componentStyles';

const About = () => (
  <div style={componentStyles.bodyStyle}>
    <p style={componentStyles.headerStyle}>About this site</p>
    <p style={componentStyles.bodyStyle}>I made it using create-react-app</p>
  </div>
);
export default About;
