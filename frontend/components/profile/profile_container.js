import { connect } from "react-redux";
import Profile from "./profile";
import { openModal } from "../../actions/modal_actions";
import { withRouter } from "react-router-dom";


const msp = (state, ownProps) => {
  // const userId = state.session.currentUser;
  debugger
  const user = state.entities.users[ownProps.match.params.id];
  return { user };
}


const mdp = dispatch => ({
  createBoard: () => dispatch(openModal("createBoard")),
  
})

export default withRouter(connect(msp, mdp)(Profile));