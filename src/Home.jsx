import React from 'react';
import './styles/App.css';
import profile from './assets/picture.jpg';
import componentStyles from './styles/componentStyles';

// lol
const getMyYearsOfExperience = () => new Date().getFullYear() - 2013;

const profileText = 'A picture of Alex Wu';

const Home = () => (
  <div style={componentStyles.bodyStyle}>
    <p style={componentStyles.headerStyle}>About Me</p>
    <div style={componentStyles.alignElementsCenter}>
      <p style={componentStyles.textStyle}>
        Software Engineer with {getMyYearsOfExperience()} years of
        pactical experience in automated software testing
      </p>
      <img style={componentStyles.profilePictureStyle} src={profile} alt={profileText} title={profileText} />
    </div>
  </div>
);
export default Home;
