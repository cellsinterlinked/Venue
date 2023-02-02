import React from 'react';
import ReactDOM from 'react-dom';
import Backdrop from './Backdrop';
import { CSSTransition } from 'react-transition-group';
import './Modal.css';
import {BsChevronLeft} from 'react-icons/bs';
import {BsChevronRight} from 'react-icons/bs';
import {IoClose} from 'react-icons/io5';

const ModalOverlay = (props) => {
  const content = <div className={`modal ${props.modalStyle}`}>
    <div className="modal_holder">
    {props.children}
    {props.scroll && <div className="modal-chevron_left" onClick={props.scrollBackward}><BsChevronLeft className="modal-chev" /></div>}
    {props.scroll && <div className="modal-chevron_right" onClick={props.scrollForward}><BsChevronRight className="modal-chev"/></div>}
    {props.scroll && <div className="modal-cancel" onClick={props.onCancel}><IoClose className="modal_close"/></div>}
    </div>
    
    </div>;
  return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

const Modal = (props) => {
  return (
    <>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition in={props.show} mountOnEnter unmountOnExit timeout={200} classNames={'modal'}>
        <ModalOverlay {...props} />
      </CSSTransition>
    </>
  );
};

export default Modal;