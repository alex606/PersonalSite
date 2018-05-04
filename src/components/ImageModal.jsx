import React from 'react';

const closeModal = () => {
  const modal = document.getElementsByClassName('modal')[0];
  modal.style.display = 'none';
};

/* Caption of Modal Image */
const captionStyle = {
  margin: 'auto',
  display: 'block',
  width: '80%',
  maxWidth: '700px',
  textAlign: 'center',
  color: '#ccc',
  padding: '10px 0',
  height: '150px',
};

const ImageModal = () => (
  <div className="modal">
    <span
      tabIndex={0}
      onClick={closeModal}
      onKeyPress={closeModal}
      role="button"
      className="close"
    >&times;
    </span>
    <img alt="modal" className="modal-content" />
    <div style={captionStyle} id="caption" />
  </div>
);
export default ImageModal;
