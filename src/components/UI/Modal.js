import React from 'react';
import ReactDOM from 'react-dom';
import { BackdropStyle, ModalStyle } from './Modal.styles';

const Backdrop = (props) => {
    return <BackdropStyle />
};

const ModalOverlay = (props) => {
    return (
        <ModalStyle>
          {props.children}
        </ModalStyle>
    )
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    return (
      <>
        {ReactDOM.createPortal(<Backdrop />, portalElement)}
        {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
      </>
    )
}

export default Modal;