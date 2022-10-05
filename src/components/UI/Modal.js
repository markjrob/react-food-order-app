import { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onCloseCart} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const protalElemant = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onCloseCart={props.onCloseCart} />, protalElemant)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        protalElemant
      )}
    </Fragment>
  );
};

export default Modal;
