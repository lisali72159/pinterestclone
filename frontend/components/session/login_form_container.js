import { connect } from "react-redux";
import SessionForm from "./session_form";
import { login, signup, clearErrors } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  return { errors: state.errors.session, formType: "login" };
};

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  signup: () => dispatch(openModal("signup")),
  closeModal: () => dispatch(closeModal()),
  // clearErrors: () => dispatch(clearErrors())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm));
