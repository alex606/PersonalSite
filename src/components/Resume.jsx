import React, { Component } from 'react';
import resumePdf from '../assets/resume.pdf';
import componentStyles from '../../src/styles/componentStyles';

const resumeStyle = {
  height: '1150px',
  width: '900px',
};

const buttonDisplayText = buttonState => (buttonState ? 'Hide Resume' : 'Display Resume');

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
      <div >
        <button style={componentStyles.buttonStyle} onClick={this.toggleResumeDisplay}>{buttonDisplayText(this.state.display)}</button>
        {this.state.display && <iframe style={resumeStyle} title="resume" src={resumePdf} />}
      </div>);
  }
}
export default Resume;
