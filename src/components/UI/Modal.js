import React,{Fragment} from "react";
import classes from "./Modal.module.css";
import ReactDOM from 'react-dom';


const BackDrop =(props) =>{
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
}



const OverLay = (props) => {
  return <div className={classes.overlay}>
    <div className={classes.content}>
          {props.children}
      </div>
    </div>;
};


const portalElement = document.getElementById('overlays');


const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop onClick={props.onClick} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <OverLay >
          {props.children}
          </OverLay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
