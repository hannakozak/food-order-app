import React from 'react';
import ReactDOM from 'react-dom';
import { BackdropStyle, ModalStyle } from './Modal.styles';

const Backdrop = (props) => {
    return <BackdropStyle onClick={props.onCloseBasket}/>
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
        {ReactDOM.createPortal(<Backdrop onCloseBasket={props.onCloseBasket}/>, portalElement)}
        {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
      </>
    )
}

export default Modal;