import React from "react";
import Classses from "./Modal.module.css";
import Card from "./Card";

const Modal = (props) => {
  return (
    <div className={Classses.backdrop} onClick={props.onClick}>
      <Card>{props.children}</Card>
    </div>
  );
};

export default Modal;
