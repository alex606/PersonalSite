import React from 'react';
import componentStyles from './styles/componentStyles';
import Resume from './components/Resume';


const Portfolio = () => (
  <div style={componentStyles.bodyStyle}>
    <p style={componentStyles.headerStyle}>Portfolio</p>
    <p style={componentStyles.textStyle}>
        I graduated with a B.S. in Mechanical Engineering from Kansas State University
        with a minor in Physics and another minor in Computer Science.
        Most of my professional experience is in using Automation tools such as Selenium for QA Automation.
        I have experience in using front-end technologies such as React, and back-end technologies
        such as C#, Java, and NodeJS.
    </p>
    <Resume />
  </div>
);
export default Portfolio;
