import React from "react";
import { Transition, CSSTransition } from "react-transition-group";

import "./Modal.css";

const modal = (props) => {
  // const cssClasses = [
  //   "Modal",
  //   props.show ? "ModalOpen" : "ModalClosed"
  // ];

  const animationTiming = {
    enter: 400,
    exit: 1000,
  };

  return (
    // <Transition
    //   in={props.show}
    //   timeout={animationTiming}
    //   mountOnEnter
    //   unmountOnExit
    //   onEnter={() => console.log('onEnter')}
    //   onEntering={() => console.log('onEntering')}
    //   onEntered={() => console.log('onEntered')}
    //   onExit={() => console.log('onExit')}
    //   onExiting={() => console.log('onExiting')}
    //   onExited={() => console.log('onExited')}
    // >
    //   {(state) => {
    //     const cssClasses = [
    //       "Modal",
    //       state === "entering"
    //         ? "ModalOpen"
    //         : state === "exiting"
    //         ? "ModalClosed"
    //         : null,
    //     ];
    //     return (
    //       <div className={cssClasses.join(" ")}>
    //         <h1>A Modal</h1>
    //         <button className="Button" onClick={props.closed}>
    //           Dismiss
    //         </button>
    //       </div>
    //     );
    //   }}
    // </Transition>
    <CSSTransition
      in={props.show}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: '',
        enterActive: 'ModalOpen', 
        exit: '',
        exitActive: 'ModalClose'
      }}
    >
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default modal;
