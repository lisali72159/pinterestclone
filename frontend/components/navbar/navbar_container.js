import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Navbar from './navbar';
import withRouter from 'react-router-dom';

const msp = state => {
  let user = state.entities.users[state.session.currentUser];
  return {user}
}
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default (connect(
  msp,
  mapDispatchToProps
)(Navbar));