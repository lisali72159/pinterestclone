import React from "react";
import { connect } from "react-redux";
import LoginFormContainer from "../session/login_form_container";
import SignupFormContainer from "../session/signup_form_container";
import BoardFormContainer from "../board/board_form_container";
import EditBoardFormContainer from "../board/edit_board_form_container";
import { openModal, closeModal } from "../../actions/modal_actions";
import { withRouter } from 'react-router-dom';
import EditPinFormContainer from '../pin/edit_pin_form_container';


function Modal({ modal, props, closeModal }) {

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
    case "editBoard":
      component = <EditBoardFormContainer id={props.id} />;
      break;
    case "editPin":
      component = <EditPinFormContainer id={props.pinId} />;
      break;
    default:
      return null;
  }
  if (modal === "login" || modal === "signup") {
    return (
      <div className="modal-background">
        <div className="modal-child">{component}</div>
      </div>
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
  return {
    modal: state.ui.modal.type,
    props: state.ui.modal.props
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => {
      return dispatch(closeModal())
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
