import { connect } from "react-redux";
import { edit } from "../../actions/session_actions";
import ProfileForm from "./profile_form";

const mapStateToProps = state => {
  // debugger
  let userId = state.session.currentUser.id;
  let user = state.entities.users[userId];
  return { user };
  // return { errors: state.errors.session, formType: "edit" };
};

const mapDispatchToProps = dispatch => ({
  edit: (user) => dispatch(edit(user))
});

export default 
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProfileForm);
