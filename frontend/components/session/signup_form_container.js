import { connect } from "react-redux";
import SignupForm from "./signup_form";
import { signup, login, clearErrors} from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  return { errors: state.errors.session, formType: "signup" };
};

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  login: () => dispatch(openModal("login")),
  // clearErrors: () => dispatch(clearErrors()),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm));
