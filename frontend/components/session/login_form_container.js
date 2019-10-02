import { connect } from "react-redux";
import SessionForm from "./session_form";
import { login, signup } from "../../actions/session_actions";
import { openModal } from '../../actions/modal_actions';


const mapStateToProps = (state) => {
  return { errors: state.errors.login, formType: 'login' }
};

const mapDispatchToProps = (dispatch) => ({
  login: user => dispatch(login(user)),
  signup: () => dispatch(openModal('signup')),
  

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
