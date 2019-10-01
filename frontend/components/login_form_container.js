import { connect } from "react-redux";
import SessionForm from "./session_form";
import { login } from "../actions/session_actions";

const mapStateToProps = (state, ownProps) => {
  return { formType: "login", errors: state.errors.session };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: user => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
