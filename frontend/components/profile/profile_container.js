import { connect } from "react-redux";
import Profile from "./profile";
import { openModal } from "../../actions/modal_actions";
import { withRouter } from "react-router-dom";
import { fetchAllUsers, fetchUser } from '../../actions/user_actions';


const msp = (state, ownProps) => {
  
  // debugger
  const user = state.entities.users[ownProps.match.params.id];
  // debugger
  return { user };
}


const mdp = dispatch => ({
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  fetchUser: (id) => dispatch(fetchUser(id)),
  createBoard: () => dispatch(openModal("createBoard")),
  
})

export default withRouter(connect(msp, mdp)(Profile));