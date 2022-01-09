import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';
const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    const { code } = e;
    if (code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackDropClick = e => {
    const { target, currentTarget } = e;
    if (target === currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className="Modal__backdrop" onClick={this.handleBackDropClick}>
        <div className="Modal__content">{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}
