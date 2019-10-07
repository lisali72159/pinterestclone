import { connect } from "react-redux";
import Profile from "./profile";
import { openModal } from "../../actions/modal_actions";
import { withRouter } from "react-router-dom";


const msp = (state) => {
  // debugger
  const userId = state.session.currentUser;
  const user = state.entities.users[userId];
  // debugger
  return { user };
}


const mdp = dispatch => ({
  createBoard: () => dispatch(openModal("createBoard")),
})

export default withRouter(connect(msp, mdp)(Profile));