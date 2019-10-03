import { connect } from "react-redux";
import SignupForm from "./signup_form";
import { signup, login } from "../../actions/session_actions";
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = state => {
  return { errors: state.errors.session, formType: "signup" };
};

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  login: () => dispatch(openModal("login"))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
