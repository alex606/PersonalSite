import React from 'react';
import componentStyles from './styles/componentStyles';

const Links = () => (
  <ul>
    <li>
      <a href="https://www.linkedin.com/in/alexander-wu-a9a44179/">LinkedIn</a>
    </li>
    <li>
      <a href="https://github.com/alex606">GitHub</a>
    </li>
  </ul>
);

const Footer = () => (
  <div style={componentStyles.footerStyle}>
    <Links />
  </div>
);

export default Footer;
