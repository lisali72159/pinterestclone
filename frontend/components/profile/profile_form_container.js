import { connect } from "react-redux";
import { edit } from "../../actions/session_actions";
import ProfileForm from "./profile_form";

const mapStateToProps = state => {
  let userId = state.session.currentUser;
  let user = state.entities.users[userId];
  return { user };
  // return { user, errors: state.errors.session };
};

const mapDispatchToProps = dispatch => ({
  edit: (user) => dispatch(edit(user))
});

export default 
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProfileForm);
