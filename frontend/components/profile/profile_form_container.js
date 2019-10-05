import { connect } from "react-redux";
import { edit } from "../../actions/user_actions"
import ProfileForm from "./profile_form";

const mapStateToProps = state => {
  return { errors: state.errors.session, formType: "edit" };
};

const mapDispatchToProps = dispatch => ({
  edit: (user) => dispatch(edit(user))
});

export default 
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProfileForm);
