import React from 'react';
import componentStyles from './styles/componentStyles';

const About = () => (
  <div style={componentStyles.bodyStyle}>
    <p style={componentStyles.headerStyle}>About this site</p>
    <p style={componentStyles.textStyle}>I made this site using create-react-app and host it using github pages</p>
  </div>
);
export default About;
