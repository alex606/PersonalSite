import React from 'react';
import { Row, Col, Card, Collapse } from 'antd';
import './styles/App.css';
import profile from './assets/picture.JP2';
import componentStyles from './styles/componentStyles';

const { Panel } = Collapse;

// lol
const getMyYearsOfExperience = () => new Date().getFullYear() - 2013;

const profileText = 'A picture of Alex Wu';
const Home = () => (
  <Collapse defaultActiveKey={['1']} >
    <Panel header="About Me" key="1">
      <Card title="Welcome. A bit about myself....">
        <Row gutter={16} type="flex" justify="space-around" align="middle" >
          <Col >
            <img style={componentStyles.profilePictureStyle} src={profile} alt={profileText} title={profileText} />
          </Col>
        </Row>
        <Row gutter={16} type="flex" justify="space-around" align="middle" >
          <Col span={16}>
            <div style={componentStyles.bodyStyle}>Software Engineer with {getMyYearsOfExperience()} years of
        practical experience in automated software testing.
        Experienced at working in teams utilizing agile workflow.
        Knowledgeable at practical application development.
            </div>
          </Col>
        </Row>
      </Card>
    </Panel>
  </Collapse>
);
export default Home;
