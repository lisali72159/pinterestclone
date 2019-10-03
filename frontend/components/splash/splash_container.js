import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import Splash from "../splash/splash";

const mapStateToProps = state => {};

const mapDispatchToProps = dispatch => {
  return {
    signup: () => dispatch(openModal("signup"))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Splash);
