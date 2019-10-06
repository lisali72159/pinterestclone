import { connect } from "react-redux";
import Profile from "./profile";
import { edit } from "../../actions/session_actions";


const msp = state => {
  debugger
  let user = state.session.currentUser;
  debugger
  // let user = state.entities.users[userId];
  debugger
  return { user };
}


const mdp = dispatch => ({
  
  edit: (user) => dispatch(edit(user)),
})

export default connect(msp, mdp)(Profile)