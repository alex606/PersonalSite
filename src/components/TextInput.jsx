import React, { Component } from 'react';
import PropTypes from 'prop-types';
import componentStyles from '../styles/componentStyles';

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: props.placeholder,
      name: props.name,
      type: props.type,
      id: props.id,
      label: props.label,
      htmlFor: props.htmlFor,
    };
  }

  render() {
    return (
      <div style={componentStyles.textStyle}>
        <label htmlFor={this.state.htmlFor}>{this.state.label}</label>
        <input
          placeholder={this.state.placeholder}
          type={this.state.type}
          name={this.state.name}
          id={this.state.id}
        />
      </div>);
  }
}

TextInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  htmlFor: PropTypes.string,
};
TextInput.defaultProps = {
  htmlFor: '',
};
export default TextInput;

