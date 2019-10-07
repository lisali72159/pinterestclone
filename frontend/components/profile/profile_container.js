import { connect } from "react-redux";
import Profile from "./profile";
import { edit } from "../../actions/session_actions";
import { withRouter } from "react-router-dom";


const msp = (state) => {
  // debugger
  let user = state.session.currentUser;
  // debugger
  return { user };
}


const mdp = dispatch => ({
  
  edit: (user) => dispatch(edit(user)),
})

export default withRouter(connect(msp, mdp)(Profile));