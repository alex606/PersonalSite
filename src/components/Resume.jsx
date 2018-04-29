import React, { Component } from 'react';
import resumePdf from '../assets/resume.pdf';
import componentStyles from '../../src/styles/componentStyles';

const resumeStyle = {
  height: '1150px',
  width: '900px',
};

class Resume extends Component {
  constructor() {
    super();
    this.state = {
      display: false,
    };
    this.displayResume = this.displayResume.bind(this);
  }

  displayResume() {
    this.setState({ display: !this.state.display });
  }

  render() {
    return (
      <div >
        <button style={componentStyles.buttonStyle} onClick={this.displayResume}>Display Resume? </button>
        {this.state.display && <iframe style={resumeStyle} title="resume" src={resumePdf} />}
      </div>);
  }
}
export default Resume;
