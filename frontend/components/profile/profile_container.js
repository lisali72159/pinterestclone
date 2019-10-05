import { connect } from "react-redux";
import Profile from "./profile";
import { edit } from "../../actions/user_actions";


const msp = state => {
  // debugger
  let userId = state.session.currentUser;
  let user = state.entities.users[userId];
  return { user };
}


const mdp = dispatch => ({
  edit: (user) => dispatch(edit(user))
})

export default connect(msp, mdp)(Profile)