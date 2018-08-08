import React from 'react';
import { Icon } from 'antd';

const iconGood = () => <Icon style={{ color: 'green' }} type="check-circle-o" />;
const iconBlank = () => <Icon type="check-circle-o" />;

// TODO: How to generate an HTML object in a loop
const get4Icons = () => (
  <div>
    {iconGood()}
    {iconGood()}
    {iconGood()}
    {iconGood()}
    {iconBlank()}
    <p>4 / 5</p>
  </div>);

const get3Icons = () => (
  <div>
    {iconGood()}
    {iconGood()}
    {iconGood()}
    {iconBlank()}
    {iconBlank()}
    <p>3 / 5</p>
  </div>);

export const get2Icons = () => (
  <div>
    {iconGood()}
    {iconGood()}
    {iconBlank()}
    {iconBlank()}
    {iconBlank()}
    <p>2 / 5</p>
  </div>);
export const dataSources = {
  languageSources: [{
    key: '1',
    skill: 'C#',
    proficiency: get4Icons(),
  }, {
    key: '2',
    skill: 'JavaScript / TypeScript / NodeJS',
    proficiency: get4Icons(),
  }, {
    key: '3',
    skill: 'Java',
    proficiency: get3Icons(),
  }, {
    key: '4',
    skill: 'Python',
    proficiency: get2Icons(),
  }, {
    key: '5',
    skill: 'HTML / CSS',
    proficiency: get2Icons(),
  }],
  languageColumns: [{
    title: 'Language Skills',
    dataIndex: 'skill',
    key: 'skill',
  }, {
    title: 'Proficiency',
    dataIndex: 'proficiency',
    key: 'proficiency',
  }],
  positionDataSources: [{
    key: '1',
    position: 'Test Automation / SDET',
    proficiency: get4Icons(),
  }, {
    key: '2',
    position: 'BackEnd Developer',
    proficiency: get3Icons(),
  }, {
    key: '3',
    position: 'FrontEnd Developer',
    proficiency: get2Icons(),
  }],
  positionsColumns: [{
    title: 'Positions',
    dataIndex: 'position',
    key: 'position',
  }, {
    title: 'Proficiency',
    dataIndex: 'proficiency',
    key: 'proficiency',
  }],

  deploymentTools: [{
    key: '1',
    tools: 'Gitlab',
    proficiency: get4Icons(),
  }, {
    key: '2',
    tools: 'Bamboo',
    proficiency: get3Icons(),
  }, {
    key: '3',
    tools: 'Docker',
    proficiency: get2Icons(),
  }, {
    key: '4',
    tools: 'Jenkins',
    proficiency: get2Icons(),
  }],
  deploymentColumns: [{
    title: 'Tools',
    dataIndex: 'tools',
    key: 'tools',
  }, {
    title: 'Proficiency',
    dataIndex: 'proficiency',
    key: 'proficiency',
  }],


  tools: [{
    key: '1',
    tools: 'Git',
    proficiency: get4Icons(),
  }, {
    key: '2',
    tools: 'Selenium',
    proficiency: get4Icons(),
  }, {
    key: '3',
    tools: 'Jira',
    proficiency: get4Icons(),
  }],
  toolsColumns: [{
    title: 'Utilities Used',
    dataIndex: 'tools',
    key: 'tools',
  }, {
    title: 'Proficiency',
    dataIndex: 'proficiency',
    key: 'proficiency',
  }],
};
