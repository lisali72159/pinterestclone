import React from "react";
import { connect } from "react-redux";
import LoginFormContainer from "../session/login_form_container";
import SignupFormContainer from "../session/signup_form_container";
import BoardFormContainer from "../board/board_form_container";
import { openModal, closeModal } from "../../actions/modal_actions";
import { withRouter } from 'react-router-dom';


function Modal({ modal, closeModal }) {

  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case "login":
      component = <LoginFormContainer />;
      break;
    case "signup":
      component = <SignupFormContainer />;
      break;
    case "createBoard":
      component = <BoardFormContainer />;
      break;
    default:
      return null;
  }
  // debugger
  if (modal === "login" || modal === "signup") {
    return (
      <>
      <div className="modal-background">
    <div className="modal-child">{component}</div>
    </div>
    </>
    )
  } else {
    return (
      
      <div className="modal-background" onClick={closeModal}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          {component}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // debugger
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
