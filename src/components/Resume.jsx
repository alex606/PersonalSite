import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import resumePdf from '../assets/resume.pdf';


const resumeStyle = {
  height: '1080px',
  width: '800px',
};

const buttonDisplayText = buttonState => (buttonState ? 'Hide Resume' : 'Display Resume');
const buttonStyle = {
  fontSize: '20px',
  height: '40px',
  borderRadius: '6px',
  width: '200px',
};
class Resume extends Component {
  constructor() {
    super();
    this.state = {
      display: false,
    };
    this.toggleResumeDisplay = this.toggleResumeDisplay.bind(this);
  }
  toggleResumeDisplay() {
    this.setState({ display: !this.state.display });
  }
  render() {
    return (
      <div>
        <Row gutter={16} type="flex" justify="space-around" align="middle" >
          <Col>
            <Button type="primary" style={buttonStyle} onClick={this.toggleResumeDisplay}>{buttonDisplayText(this.state.display)}</Button>
          </Col>
        </Row>
        <Row gutter={16} type="flex" justify="space-around" align="middle" >
          <Col>
            {this.state.display && <iframe style={resumeStyle} title="resume" src={resumePdf} />}
          </Col>
        </Row>
      </div>);
  }
}
export default Resume;
