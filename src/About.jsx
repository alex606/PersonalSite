import React from 'react';
import { Row, Col, Menu, Icon } from 'antd';
import componentStyles from './styles/componentStyles';

const iconSize = 40;
const sendToLinkedIn = () => {
  window.location.href = 'https://www.linkedin.com/in/alexander-wu-a9a44179/';
};
const sendToGithub = () => {
  window.location.href = 'https://github.com/alex606';
};

// Observe my mastery of the spread operator...
const footerStyle = {
  ...componentStyles.bodyStyle,
  backgroundColor: 'lightgrey',
};
const About = () => (
  <Row style={footerStyle} gutter={16} type="flex" justify="space-around" align="middle">
    <Col span={8}>
      <p style={componentStyles.headerStyle}>About this site</p>
      <p style={componentStyles.textStyle}>I built this site using create-react-app and host it using github pages. I use the Ant Design UI Library to handle component displays</p>
    </Col>
    <Col span={5}>
      <Menu >
        <Menu.Item onClick={sendToLinkedIn}>
          {<Icon type="linkedin" style={{ fontSize: iconSize, color: '#08c' }} />}
          LinkedIn
        </Menu.Item>
        <Menu.Item onClick={sendToGithub}>
          {<Icon type="github" style={{ fontSize: iconSize, color: '#000' }} />}
          Github
        </Menu.Item>
      </Menu>
    </Col>
  </Row>
);
export default About;
