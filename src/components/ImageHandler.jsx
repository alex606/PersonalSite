import React, { Component } from 'react';
import PropTypes from 'prop-types';

const pictureDisplay = {
  height: '300px',
  width: '400px',
  marginTop: '10px',
  marginBottom: '10px',
};

class ImageHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: props.src,
      className: 'projectImages',
      pictureId: props.pictureId,
      alt: props.alt,
    };
    this.displayModal = this.displayModal.bind(this);
  }

  displayModal() {
    const modal = document.querySelector('.modal');
    const modalImg = document.querySelector('.modal-content');
    const caption = document.getElementById('caption');
    modal.style.display = 'block';
    modalImg.src = this.state.src;
    caption.innerHTML = this.state.alt;
  }

  render() {
    return (
      <div>
        <img
          onClick={this.displayModal}
          role="presentation"
          src={this.state.src}
          id={this.state.pictureId}
          className={this.state.className}
          alt={this.state.alt}
          style={pictureDisplay}
        />
      </div>
    );
  }
}

ImageHandler.propTypes = {
  src: PropTypes.string.isRequired,
  pictureId: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
export default ImageHandler;
