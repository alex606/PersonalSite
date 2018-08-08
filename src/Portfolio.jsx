import React from 'react';
import { Tabs, Row, Col, Collapse, Table } from 'antd';
import componentStyles from './styles/componentStyles';
import Resume from './components/Resume';
import ImageHandler from './components/ImageHandler';
import ImageModal from './components/ImageModal';
import hthon from './assets/hthon.JP2';
import gj2015 from './assets/gj2015.JP2';
import gj2016 from './assets/gj2016.JP2';
import { dataSources } from './TableData';

const { TabPane } = Tabs;
const { Panel } = Collapse;


// The realization hit when I was improperly using the Collapse component, but I'm too lazy to refactor everything...
const Portfolio = () => (
  <div >
    <Collapse>
      <Panel header="Technical Skills" >
        <Row gutter={16} type="flex" justify="space-around" align="middle">
          <Col span={16}>
            <p style={componentStyles.bodyStyle}>Sometimes I get questions from recruiters asking me to rate myself in certain tech areas.
            While most of my career so far has been focused on automated software testing, I am a capable developer in other parts of the stack as well.
            </p>
          </Col>
        </Row>
        <Row gutter={16} type="flex" justify="space-around" align="middle" >
          <Col span={16}>
            <Tabs defaultActiveKey="1">
              <TabPane tab="Job Capabilities" key="1" >
                <Table
                  pagination={false}
                  dataSource={dataSources.positionDataSources}
                  columns={dataSources.positionsColumns}
                />
              </TabPane>
              <TabPane tab="Programming Languages" key="2" >
                <Table
                  pagination={false}
                  dataSource={dataSources.languageSources}
                  columns={dataSources.languageColumns}
                />
              </TabPane>
              <TabPane tab="CI / CD Tools" key="3" >
                <Table
                  pagination={false}
                  dataSource={dataSources.deploymentTools}
                  columns={dataSources.deploymentColumns}
                />
              </TabPane>
              <TabPane tab="Other Tools" key="4" >
                <Table
                  pagination={false}
                  dataSource={dataSources.tools}
                  columns={dataSources.toolsColumns}
                />
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </Panel>
    </Collapse>
    <Collapse>
      <Panel header="Portfolio" >
        <Row gutter={16} type="flex" justify="space-around" align="middle" >
          <Col span={16}>
            <p style={componentStyles.bodyStyle}>
        I graduated with a B.S. in Mechanical Engineering from Kansas State University
        with a minor in Physics and another minor in Computer Science.
        Most of my professional experience is in using Automation tools such as Selenium for QA Automation.
        I have experience in using front-end technologies such as React, and back-end technologies
        such as C#, Java, and NodeJS.
            </p>
            <Resume />
          </Col>
        </Row>
      </Panel>
    </Collapse>
    <Collapse>
      <Panel header="Unity Projects">
        <Row gutter={16} type="flex" justify="space-around" align="middle" >
          <Col span={16}>
            <p style={componentStyles.bodyStyle}>
    Unfortunately, much of the stuff that I have worked on during work is proprietary stuff,
    but here is a small sample of stuff that I can freely showcase. While in college, I participated in Game Jams competitions for fun.
    While they provide fond nostalgic memories for me, these games are pretty terrible, lol.
    Makes sense considering they were made in a short timespan of 2 continuous days
            </p>
          </Col>
        </Row>
        <Row gutter={16} type="flex" justify="space-around" align="middle" >
          <Col span={16}>
            <Tabs defaultActiveKey="1">
              <TabPane tab="VR Piano w/ Leap motion sensor (2016)" key="1" >
                <p style={componentStyles.bodyStyle}>
          Hack-a-thon that was sponsored by Kansas State.
            Not a Game Jam competition per se, but I ended up making a game anyways.
            First Hackathon that I participated in and no one that I knew wanted to try it with me.
            I showed up and found random team-mates to join with.
                </p>
                <ImageHandler
                  pictureId="hthon"
                  src={hthon}
                  alt="A screenshot of myself demo-ing the VR Piano with motion sensor"
                />
              </TabPane>
              <TabPane tab="Live or Diabetes (2016)" key="2">
                <p style={componentStyles.bodyStyle}>
          In Game Jam competitions, in my experience, there is usually some sort of competition theme to abide by.
            The theme for this year was diabetes, and that was a weird theme to work with.
            Neat lessons learned from this competition:
            Character Animations, health bar, rubber-banded camera movements, attack ability
                </p>
                <ImageHandler
                  pictureId="gj2016"
                  src={gj2016}
                  alt="A screenshot of LiveOrDiabetes."
                />
              </TabPane>
              <TabPane tab="Hack The Hacker (2015)" key="3">
                <p style={componentStyles.bodyStyle}> The first game I ever helped create using Unity.
          I was on a team with several other intern co-workers from GE Aviation.
          We modeled the end game boss after our Manager.
          In the game, we decided to have him throw instant killer cats at us for some reason.
                </p>
                <ImageHandler
                  pictureId="gj2015"
                  src={gj2015}
                  alt="A screenshot of HackTheHacker. The first game I ever helped create using Unity."
                />
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </Panel>
    </Collapse>
    <ImageModal />
  </div>
);
export default Portfolio;
