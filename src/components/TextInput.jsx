import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: props.placeholder,
      name: props.name,
      type: props.type,
      id: props.id,
      style: props.style,
    };
  }

  render() {
    return (
      <div>
        <input
          style={this.state.style}
          placeholder={this.state.placeholder}
          type={this.state.type}
          name={this.state.name}
          id={this.state.id}
          required
        />
      </div>);
  }
}

TextInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default TextInput;

